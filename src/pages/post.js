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
import { useStore } from '@/stores/init2'

import GlobalLayout from '@/containers/GlobalLayout'
import ArticleBanner from '@/containers/banner/ArticleBanner'
import PostContent from '@/containers/content/PostContent'

import { P } from '@/schemas'

async function fetchData(props, opt) {
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

export async function getServerSideProps(props) {
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

  // if (!contains(mainPath, pluck('raw', post.communities))) {
  //   console.log("## hello 1.1 --> ", subPath)
  //   return { props: { errorCode: 404 } }
  // }

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

const PostPage = props => {
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
        metric="article"
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={`/${mainPath}/post/${post.id}`}
        noSidebar
      >
        <ArticleBanner />
        <PostContent />
      </GlobalLayout>
    </Provider>
  )
}

export default PostPage
