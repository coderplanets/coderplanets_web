import {
  isEmpty,
  contains,
  merge,
  toLower,
  omit,
  findIndex,
  propEq,
} from 'ramda'
import { DEFAULT_THEME } from '@/config'
import { TYPE, THREAD } from '@/constant'
import { P } from '@/schemas'

import BStore from './bstore'

/*
 * check if current is on server side
 */
export const isServerSide = typeof window === 'undefined'
export const isClientSide = !isServerSide

// get jwt from cookie or localStorage
// props has to be getInitialProps's arg
export const getJwtToken = props => {
  if (isServerSide) return BStore.cookie.from_req(props.req, 'jwtToken')

  return BStore.get('token')
}

export const ssrPagedSchema = thread => {
  switch (toLower(thread)) {
    case THREAD.JOB:
      return P.pagedJobs

    case THREAD.VIDEO:
      return P.pagedVideos

    case THREAD.REPO:
      return P.pagedRepos

    case THREAD.CHEATSHEET:
      return P.cheatsheet

    case THREAD.WIKI:
      return P.wiki

    default:
      return P.pagedPosts
  }
}

export const ssrPagedFilter = (community, thread, filter, userHasLogin) => {
  thread = toLower(thread)
  if (thread === THREAD.CHEATSHEET || thread === THREAD.WIKI)
    return { community }

  if (community === 'home' && thread === THREAD.JOB) {
    filter = omit(['community'], filter)
    return { filter, userHasLogin }
  }

  return { filter, userHasLogin }
}

const getCurView = source =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

const getActiveTag = (tagTitle, tagList) => {
  if (!tagTitle || isEmpty(tagList)) return null

  const index = findIndex(propEq('title', tagTitle), tagList)

  if (index < 0) return null
  return tagList[index]
}

export const ssrContentsThread = (resp, thread, filters = {}) => {
  // console.log('filter in resp: ', resp.filter)
  const activeTag = getActiveTag(resp.filter.tag, resp.partialTags)

  switch (toLower(thread)) {
    case THREAD.JOB:
      return {
        jobsThread: {
          pagedJobs: resp.pagedJobs,
          curView: getCurView(resp.pagedJobs),
          activeTag,
          filters,
        },
      }

    case THREAD.VIDEO:
      return {
        videosThread: {
          pagedVideos: resp.pagedVideos,
          curView: getCurView(resp.pagedVideos),
          activeTag,
          filters,
        },
      }

    case THREAD.REPO:
      return {
        reposThread: {
          pagedRepos: resp.pagedRepos,
          curView: getCurView(resp.pagedRepos),
          activeTag,
          filters,
        },
      }

    case THREAD.CHEATSHEET:
      return {
        cheatsheetThread: {
          cheatsheet: resp.cheatsheet,
          curView: isEmpty(resp.cheatsheet.readme)
            ? TYPE.NOT_FOUND
            : TYPE.RESULT,
        },
      }

    case THREAD.WIKI:
      return {
        wikiThread: {
          wiki: resp.wiki,
          curView: isEmpty(resp.wiki.readme) ? TYPE.NOT_FOUND : TYPE.RESULT,
        },
      }

    default:
      return {
        postsThread: {
          pagedPosts: resp.pagedPosts,
          curView: getCurView(resp.pagedPosts),
          activeTag,
          filters,
        },
      }
  }
}

// TODO generl
export const addTopicIfNeed = (source, thread, topic) => {
  if (!contains(thread, ['JOB', 'VIDEO', 'REPO', 'USER', 'WIKI'])) {
    return merge(source, { topic })
  }
  return source
}

export const validCommunityFilters = [
  'page',
  'size',
  'community',
  'topic',
  'tag',
  'length',
  'sort',
  'when',
  'read',
  // jobs spec
  'salary',
  'exp',
  'field',
  'finance',
  'scale',
  'education',
  // videos
  'source',
]

export const parseTheme = sessionState =>
  sessionState.user ? sessionState.user.customization.theme : DEFAULT_THEME
