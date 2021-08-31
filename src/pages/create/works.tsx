/*
   this page is for /create/works
 */
import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { METRIC } from '@/constant'

import { useStore } from '@/stores/init'

import { getJwtToken, makeGQClient, ssrRescue, parseTheme } from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksEditor from '@/containers/editor/WorksEditor'

import { P } from '@/schemas'

const fetchData = async (props, opt = {}) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)

  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    }
  }

  const { sessionState } = resp

  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const CreateWorksPage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/create/works`,
    title: '发布作品 | coderplanets',
    description: '发布作品',
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.WORKS_EDITOR}
        seoConfig={seoConfig}
        noSidebar
        noFooter
      >
        <WorksEditor />
      </GlobalLayout>
    </Provider>
  )
}

export default CreateWorksPage
