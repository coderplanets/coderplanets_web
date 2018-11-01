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
      }
      subscribersCount
      editorsCount
      postsCount
    }
  }
`
