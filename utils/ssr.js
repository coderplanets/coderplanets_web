import {
  merge,
  pick,
  isEmpty,
  findIndex,
  propEq,
  includes,
  values,
} from 'ramda'

import { DEFAULT_THEME } from '@/config'
import { TYPE, ARTICLE_THREAD } from '@/constant'
import { plural } from './helper'

import { makeGQClient } from './graphql'
import { ssrParseURL, akaTranslate, queryStringToJSON } from './route'

import { P } from '@/schemas'

import BStore from './bstore'

/*
 * check if current is on server side
 */
export const isServerSide = typeof window === 'undefined'
export const isClientSide = !isServerSide

export const ssrBaseStates = (resp) => {
  const { sessionState } = resp

  return {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: resp.subscribedCommunities || null,
    },
  }
}

export const ssrFetchPrepare = (context, opt) => {
  const token = ssrFetchToken(context, opt)
  const gqClient = makeGQClient(token)
  const userHasLogin = !!token

  return { token, gqClient, userHasLogin }
}

const ssrFetchToken = (context, opt) => {
  const { tokenExpired } = merge({ tokenExpired: false }, opt)
  return !tokenExpired ? getJwtToken(context) : null
}

// get jwt from cookie or localStorage
// props has to be getInitialProps's arg
export const getJwtToken = (context) => {
  if (isServerSide) return BStore.cookie.from_req(context.req, 'jwtToken')

  return BStore.get('token')
}

export const ssrPagedArticleSchema = (threadPath) => {
  const pagedThread = `paged${plural(threadPath, 'titleCase')}`

  return P[pagedThread]
}

// for works, drinks, meetups etc
export const ssrHomePagedArticlesFilter = (context, userHasLogin) => {
  const filter = pick(validCommunityFilters, {
    // @ts-ignore TODO:
    ...queryStringToJSON(context.req.url, { pagi: 'number' }),
    community: 'home',
  })

  if (filter.tag) {
    filter.articleTag = filter.tag
    delete filter.tag
  }

  return { filter, userHasLogin }
}

export const ssrPagedArticlesFilter = (context, userHasLogin) => {
  const { communityPath } = ssrParseURL(context.req)
  const community = akaTranslate(communityPath)

  const filter = pick(validCommunityFilters, {
    // @ts-ignore TODO:
    ...queryStringToJSON(context.req.url, { pagi: 'number' }),
    community,
  })

  if (filter.tag) {
    filter.articleTag = filter.tag
    delete filter.tag
  }

  return { filter, userHasLogin }
}

export const ssrError = (context, errorType, errorCode = 500) => {
  // const { communityPath } = ssrParseURL(context.req)
  switch (errorType) {
    case 'fetch': {
      return {
        redirect: {
          destination: '/oops',
          permanent: false,
        },
      }
    }

    default: {
      return {
        redirect: {
          destination: '/oops',
          permanent: false,
        },
      }
    }
  }
}

const getCurView = (source) =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

const getActiveTag = (tagRaw, tagList) => {
  if (!tagRaw || isEmpty(tagList)) return null

  const index = findIndex(propEq('raw', tagRaw), tagList)

  if (index < 0) return null
  return tagList[index]
}

/**
 * 在 SSR 端时判断是否是 ArticleTHread, 以便判断是否需要进一步获取文章列表数据
 */
export const isArticleThread = (urlThread) => {
  if (urlThread) {
    if (includes(urlThread.toLowerCase(), values(ARTICLE_THREAD))) {
      return true
    }
    return false
  }
  return false
}

export const ssrParseArticleThread = (resp, thread, filters = {}) => {
  if (!isArticleThread(thread)) return { articlesThread: {} }

  const activeTag = getActiveTag(resp.filter.tag, resp.pagedArticleTags)
  const pagedThread = `paged${plural(thread, 'titleCase')}`

  return {
    articlesThread: {
      [pagedThread]: resp[pagedThread],
      curView: getCurView(resp[pagedThread]),
      activeTag,
      filters,
    },
  }
}

export const validCommunityFilters = [
  'page',
  'size',
  'community',
  'tag',
  'length',
  'sort',
  'when',
  'read',
]

export const parseTheme = (sessionState) =>
  sessionState.user ? sessionState.user.customization.theme : DEFAULT_THEME
