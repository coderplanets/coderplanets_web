import { GetServerSideProps } from 'next'

import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, METRIC } from '@/constant'

import {
  getJwtToken,
  makeGQClient,
  ssrRescue,
  parseTheme,
  akaTranslate,
  nilOrEmpty,
  ssrParseURL,
} from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import HelpCenterContent from '@/containers/content/HelpCenterContent'

import { useStore } from '@/stores/init'

const loader = async (props, opt = {}): Promise<Record<string, unknown>> => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // const { asPath } = props
  // schema

  const { communityPath } = ssrParseURL(props.req)
  const community = akaTranslate(communityPath)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })

  return {
    ...(await sessionState),
    ...(await curCommunity),
  }
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { communityPath } = ssrParseURL(props.req)

  let resp
  try {
    resp = await loader(props)
  } catch (e) {
    const {
      response: { errors },
    } = e
    if (ssrRescue.hasLoginError(errors)) {
      resp = await loader(props, { tokenExpired: true })
    } else {
      return {
        props: {
          errorCode: 404,
          target: communityPath,
          viewing: {
            community: {
              raw: communityPath,
              title: communityPath,
              desc: communityPath,
            },
          },
        },
      }
    }
  }

  const { sessionState, community } = resp

  // // init state on server side
  const initProps = merge(
    {
      theme: {
        curTheme: parseTheme(sessionState),
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
      },
      route: {
        communityPath: community.raw,
        mainPath: community.raw,
      },
      viewing: {
        community,
      },
    },
    {},
  )

  return { props: { errorCode: null, ...initProps } }
}

const HelpCenterPage = (props) => {
  const store = useStore()
  store.mark(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.HELP_CENTER}`,
    title: '帮助中心 | xxx',
    description: 'xxx help-center',
  }

  return (
    <GlobalLayout metric={METRIC.HELP_CENTER} seoConfig={seoConfig} noSidebar>
      <HelpCenterContent metric={METRIC.HELP_CENTER} />
    </GlobalLayout>
  )
}

export default HelpCenterPage
