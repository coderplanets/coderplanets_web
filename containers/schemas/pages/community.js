import F from '../fragments'

export const subscribedCommunities = `
  query subscribedCommunities($userId: ID, $filter: PagedFilter!) {
    subscribedCommunities(userId: $userId, filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
        threads {
          title
          raw
          index
        }
      }
      ${F.pagedCounts}
    }
  }
`
export const community = `
  query community($id: ID, $raw: String) {
    community(id: $id, raw: $raw) {
      ${F.community}
      threads {
        title
        raw
        index
      }
      subscribersCount
      editorsCount
      postsCount
      jobsCount
      videosCount
      reposCount
    }
  }
`
export const pagedCommunities = `
  query($filter: CommunitiesFilter!, $userHasLogin: Boolean!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
        subscribersCount
        viewerHasSubscribed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
