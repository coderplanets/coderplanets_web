import F from '../fragments'

// contributesDigest
export const subscribedCommunities = `
  query subscribedCommunities($login: String, $filter: PagedFilter!) {
    subscribedCommunities(login: $login, filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
      }
      ${F.pagedCounts}
    }
  }
`
export const community = `
  query community($id: ID, $raw: String, $userHasLogin: Boolean!) {
    community(id: $id, raw: $raw) {
      ${F.community}
      viewerHasSubscribed @include(if: $userHasLogin)
      threads {
        title
        raw
        index
      }
      contributesDigest
      subscribersCount
      editorsCount
      meta {
        postsCount
        worksCount
        blogsCount
        radarsCount
        jobsCount
      }
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
