import F from '../fragments'

export const partialTags = `
  query($communityId: ID, $community: String, $thread: CmsThread!, $topic: String) {
    partialTags(communityId: $communityId, community: $community, thread: $thread, topic: $topic) {
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
