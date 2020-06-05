import React from 'react'
import { Provider } from 'mobx-react'
import { toUpper } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { TYPE, ROUTE, THREAD } from '@/constant'
import {
  getJwtToken,
  makeGQClient,
  ssrParseURL,
  nilOrEmpty,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import ArticleBanner from '@/containers/banner/ArticleBanner'
import JobContent from '@/containers/content/JobContent'

import { P } from '@/schemas'

const fetchData = async props => {
  const token = getJwtToken(props)
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const { thirdPath: id } = ssrParseURL(props.req)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const job = gqClient.request(P.job, { id, userHasLogin })
  const pagedComments = gqClient.request(P.pagedComments, {
    id,
    userHasLogin,
    thread: toUpper(THREAD.JOB),
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
    ...(await job),
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

  const { sessionState, job, pagedComments, subscribedCommunities } = resp

  // if (!contains(mainPath, pluck('raw', post.communities))) {
  //   console.log("## hello 1.1 --> ", subPath)
  //   return { props: { errorCode: 404 } }
  // }

  const { origialCommunity: community, ...viewingContent } = job
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    route: { mainPath, subPath: ROUTE.JOB },
    viewing: {
      job: viewingContent,
      activeThread: THREAD.JOB,
      community,
    },
    // TODO: load comments on Client
    comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const JobPage = props => {
  const store = useStore(props)

  const { viewing, route, errorCode } = props
  const { job } = viewing

  const { mainPath } = route

  const seoConfig = {
    url: `${SITE_URL}/${mainPath}/job/${job.id}`,
    title: `${job.title}`,
    datePublished: `${job.insertedAt}`,
    dateModified: `${job.updatedAt}`,
    authorName: `${job.author.nickname}`,
    description: `${job.title}`,
    images: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        page={ROUTE.JOB}
        metric="article"
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={`/${mainPath}/job/${job.id}`}
        noSidebar
      >
        <ArticleBanner showStar={false} />
        <JobContent />
      </GlobalLayout>
    </Provider>
  )
}

export default JobPage
