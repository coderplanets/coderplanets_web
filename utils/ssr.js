import { merge, pick, isEmpty, toLower, findIndex, propEq } from 'ramda'

import { DEFAULT_THEME } from '@/config'
import { TYPE } from '@/constant'
import { titleCase } from '@/utils/helper'

import { makeGQClient } from './graphql'
import {
  ssrParseURL,
  akaTranslate,
  queryStringToJSON,
  urlPath2Thread,
} from './route'

import { P } from '@/schemas'

import BStore from './bstore'

/*
 * check if current is on server side
 */
export const isServerSide = typeof window === 'undefined'
export const isClientSide = !isServerSide

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
  const thread = titleCase(urlPath2Thread(threadPath))
  const pagedThreadKey = `paged${thread}s`

  return P[pagedThreadKey]
}

export const ssrPagedFilter = (community, thread, filter, userHasLogin) => {
  thread = toLower(thread)

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

export const ssrParseArticleThread = (resp, thread, filters = {}) => {
  // console.log('filter in resp: ', resp.filter)
  const activeTag = getActiveTag(resp.filter.tag, resp.pagedArticleTags)
  const pagedThreadKey = `paged${titleCase(thread)}s`

  return {
    articlesThread: {
      [pagedThreadKey]: resp[pagedThreadKey],
      curView: getCurView(resp[pagedThreadKey]),
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
