import { isEmpty, toLower, omit, findIndex, propEq } from 'ramda'

import { DEFAULT_THEME } from '@/config'
import { HCN, TYPE, THREAD } from '@/constant'
import { titleCase } from '@/utils/helper'

import { P } from '@/schemas'

import BStore from './bstore'

/*
 * check if current is on server side
 */
export const isServerSide = typeof window === 'undefined'
export const isClientSide = !isServerSide

// get jwt from cookie or localStorage
// props has to be getInitialProps's arg
export const getJwtToken = (props) => {
  if (isServerSide) return BStore.cookie.from_req(props.req, 'jwtToken')

  return BStore.get('token')
}

export const ssrPagedArticleSchema = (thread) => {
  const pagedThreadKey = `paged${titleCase(thread)}s`
  return P[pagedThreadKey]
}

export const ssrPagedFilter = (community, thread, filter, userHasLogin) => {
  thread = toLower(thread)

  if (community === HCN && thread === THREAD.JOB) {
    filter = omit(['community'], filter)
    return { filter, userHasLogin }
  }

  return { filter, userHasLogin }
}

const getCurView = (source) =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

const getActiveTag = (tagTitle, tagList) => {
  if (!tagTitle || isEmpty(tagList)) return null

  const index = findIndex(propEq('title', tagTitle), tagList)

  if (index < 0) return null
  return tagList[index]
}

export const ssrArticleThread = (resp, thread, filters = {}) => {
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
