import React from 'react'
import { Provider } from 'mobx-react'
import { merge, toUpper } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { TYPE, ROUTE, THREAD, METRIC } from '@/constant'
import {
  getJwtToken,
  nilOrEmpty,
  makeGQClient,
  ssrParseURL,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import PostContent from '@/containers/content/PostContent'

import { P } from '@/schemas'

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const { thirdPath: id } = ssrParseURL(props.req)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const post = gqClient.request(P.post, { id, userHasLogin })
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

  // TODO: comments
  return {
    ...(await sessionState),
    ...(await post),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (props) => {
  const { mainPath } = ssrParseURL(props.req)

  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    } else {
      return { errorCode: 404 }
    }
  }

  const { sessionState, post, pagedComments, subscribedCommunities } = resp

  const { origialCommunity: community, ...viewingContent } = post
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    route: { mainPath, subPath: ROUTE.POST },
    viewing: {
      post: viewingContent,
      activeThread: THREAD.POST,
      community,
    },
    // TODO: load comments on Client
    comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const PostPage = (props) => {
  const store = useStore(props)
  const { viewing, route, errorCode } = props
  const { post } = viewing

  const { mainPath } = route

  const seoConfig = {
    url: `${SITE_URL}/${mainPath}/post/${post.id}`,
    title: `${post.title}`,
    datePublished: `${post.insertedAt}`,
    dateModified: `${post.updatedAt}`,
    authorName: `${post.author.nickname}`,
    description: `${post.title}`,
    images: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        page={ROUTE.POST}
        metric={METRIC.ARTICLE}
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={`/${mainPath}/post/${post.id}`}
        noSidebar
      >
        <ArticleDigest />
        <PostContent />
      </GlobalLayout>
    </Provider>
  )
}

export default PostPage
