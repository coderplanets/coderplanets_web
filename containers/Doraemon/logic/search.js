import { THREAD } from '@utils'
import S from '../schema'

// search contents: community, post, job, user ...
export const searchContents = (store, sr71$, title) => {
  switch (store.searchThread) {
    case THREAD.POST:
      return sr71$.query(S.searchPosts, { title })

    case THREAD.JOB:
      return sr71$.query(S.searchJobs, { title })

    case THREAD.USER:
      return sr71$.query(S.searchUsers, { name: title })

    case THREAD.VIDEO:
      return sr71$.query(S.searchVideos, { title })

    case THREAD.REPO:
      return sr71$.query(S.searchRepos, { title })

    default:
      return sr71$.query(S.searchCommunities, { title })
  }
}

export const holder = 1
