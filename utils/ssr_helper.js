import R from 'ramda'
import { P } from '../containers/schemas'
import { TYPE, THREAD } from './constants'

export const ssrPagedSchema = thread => {
  switch (R.toLower(thread)) {
    case THREAD.JOB: {
      return P.pagedJobs
    }
    case THREAD.VIDEO: {
      return P.pagedVideos
    }
    case THREAD.REPO: {
      return P.pagedRepos
    }
    case THREAD.CHEATSHEET: {
      return P.cheatsheet
    }
    default: {
      return P.pagedPosts
    }
  }
}

export const ssrPagedFilter = (community, thread, filter, userHasLogin) => {
  if (R.toLower(thread) === THREAD.CHEATSHEET) {
    return {
      community,
    }
  }

  return {
    filter,
    userHasLogin,
  }
}

const getCurView = source =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

const getActiveTag = (tagTitle, tagList) => {
  if (!tagTitle || R.isEmpty(tagList)) return null

  const index = R.findIndex(R.propEq('title', tagTitle), tagList)

  if (index < 0) return null
  return tagList[index]
}

export const ssrContentsThread = (resp, thread) => {
  // console.log('filter in resp: ', resp.filter)
  const activeTag = getActiveTag(resp.filter.tag, resp.partialTags)

  switch (R.toLower(thread)) {
    case THREAD.JOB: {
      return {
        jobsThread: {
          pagedJobs: resp.pagedJobs,
          curView: getCurView(resp.pagedJobs),
          activeTag,
        },
      }
    }
    case THREAD.VIDEO: {
      return {
        videosThread: {
          pagedVideos: resp.pagedVideos,
          curView: getCurView(resp.pagedVideos),
          activeTag,
        },
      }
    }
    case THREAD.REPO: {
      return {
        reposThread: {
          pagedRepos: resp.pagedRepos,
          curView: getCurView(resp.pagedRepos),
          activeTag,
        },
      }
    }
    case THREAD.CHEATSHEET: {
      return {
        cheatsheetThread: {
          cheatsheet: resp.cheatsheet,
          curView: TYPE.RESULT,
        },
      }
    }
    default: {
      return {
        postsThread: {
          pagedPosts: resp.pagedPosts,
          curView: getCurView(resp.pagedPosts),
          activeTag,
        },
      }
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
