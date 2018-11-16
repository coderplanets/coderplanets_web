import R from 'ramda'
import { P } from '../containers/schemas'
import { TYPE, THREAD } from './constants'

export const ssrPagedSchema = thread => {
  console.log('getPagedSchema R.toLower(thread): ', R.toLower(thread))
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
    default: {
      return P.pagedPosts
    }
  }
}

const getCurView = source =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

export const ssrContentsThread = (resp, thread) => {
  switch (R.toLower(thread)) {
    case THREAD.JOB: {
      return {
        jobsThread: {
          pagedJobs: resp.pagedJobs,
          curView: getCurView(resp.pagedJobs),
        },
      }
    }
    case THREAD.VIDEO: {
      return {
        videosThread: {
          pagedVideos: resp.pagedVideos,
          curView: getCurView(resp.pagedVideos),
        },
      }
    }
    case THREAD.REPO: {
      return {
        videosThread: {
          pagedRepos: resp.pagedRepos,
          curView: getCurView(resp.pagedRepos),
        },
      }
    }
    default: {
      return {
        postsThread: {
          pagedPosts: resp.pagedPosts,
          curView: getCurView(resp.pagedPosts),
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
