import F from '../fragments'

export const partialTags = `
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(communityId: $communityId, community: $community, thread: $thread) {
      ${F.tag}
    }
  }
`

export const pagedCategories = `
  query($filter: PagedFilter!) {
    pagedCategories(filter: $filter) {
      entries {
        id
        title
        raw
        index
      }
      ${F.pagedCounts}
    }
  }
`
