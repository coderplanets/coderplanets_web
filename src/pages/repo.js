import React from 'react'
import { Provider } from 'mobx-react'
import { merge, toUpper } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { TYPE, ROUTE, THREAD } from '@/constant'
import {
  getJwtToken,
  nilOrEmpty,
  makeGQClient,
  ssrParseURL,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import ArticleBanner from '@/containers/banner/ArticleBanner'
import RepoContent from '@/containers/content/RepoContent'

import { P } from '@/schemas'

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { thirdPath: id } = ssrParseURL(props.req)

  const sessionState = gqClient.request(P.sessionState)
  const repo = gqClient.request(P.repo, { id })
  const pagedComments = gqClient.request(P.pagedComments, {
    id,
    userHasLogin,
    thread: toUpper(THREAD.POST),
    filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
  })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await repo),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async props => {
  const { mainPath } = ssrParseURL(props.req)

  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    } else {
      return { props: { errorCode: 404 } }
    }
  }

  const { sessionState, repo, pagedComments, subscribedCommunities } = resp

  // if (!contains(mainPath, pluck('raw', post.communities))) {
  //   console.log("## hello 1.1 --> ", subPath)
  //   return { props: { errorCode: 404 } }
  // }

  const { origialCommunity: community, ...viewingContent } = repo
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    route: { mainPath, subPath: ROUTE.REPO },
    viewing: {
      repo: viewingContent,
      activeThread: THREAD.REPO,
      community,
    },
    comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const RepoPage = props => {
  const store = useStore(props)

  const { viewing, route, errorCode } = props
  const { repo } = viewing

  const { mainPath } = route

  const seoConfig = {
    url: `${SITE_URL}/${mainPath}/repo/${repo.id}`,
    title: `${repo.title}`,
    datePublished: `${repo.insertedAt}`,
    dateModified: `${repo.updatedAt}`,
    authorName: `${repo.author.nickname}`,
    description: `${repo.title}`,
    images: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        page={ROUTE.REPO}
        metric="article"
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={`/${mainPath}/job/${repo.id}`}
        noSidebar
      >
        <ArticleBanner showStar={false} showWordCount={false} showLastSync />
        <RepoContent />
      </GlobalLayout>
    </Provider>
  )
}

export default RepoPage
