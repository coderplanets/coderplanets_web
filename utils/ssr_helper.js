import R from 'ramda'
import { P } from 'containers/schemas'
import { TYPE, THREAD } from './constants'

export const ssrPagedSchema = thread => {
  switch (R.toLower(thread)) {
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
  thread = R.toLower(thread)
  if (thread === THREAD.CHEATSHEET || thread === THREAD.WIKI)
    return { community }

  if (community === 'home' && thread === THREAD.JOB) {
    filter = R.omit(['community'], filter)
    return { filter, userHasLogin }
  }

  return { filter, userHasLogin }
}

const getCurView = source =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

const getActiveTag = (tagTitle, tagList) => {
  if (!tagTitle || R.isEmpty(tagList)) return null

  const index = R.findIndex(R.propEq('title', tagTitle), tagList)

  if (index < 0) return null
  return tagList[index]
}

export const ssrContentsThread = (resp, thread, filters = {}) => {
  // console.log('filter in resp: ', resp.filter)
  const activeTag = getActiveTag(resp.filter.tag, resp.partialTags)

  switch (R.toLower(thread)) {
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
          curView: R.isEmpty(resp.cheatsheet.readme)
            ? TYPE.NOT_FOUND
            : TYPE.RESULT,
        },
      }

    case THREAD.WIKI:
      return {
        wikiThread: {
          wiki: resp.wiki,
          curView: R.isEmpty(resp.wiki.readme) ? TYPE.NOT_FOUND : TYPE.RESULT,
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
  if (!R.contains(thread, ['JOB', 'VIDEO', 'REPO', 'USER', 'WIKI'])) {
    return R.merge(source, { topic })
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
