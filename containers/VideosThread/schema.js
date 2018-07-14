import gql from 'graphql-tag'

const pagedVideosRaw = `
  query($filter: PagedArticleFilter) {
    pagedVideos(filter: $filter) {
      entries {
        id
        title
        desc
        duration
        views
        originalAuthor
        originalAuthorLink
        author {
          id
          avatar
          nickname
        }
        insertedAt
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
// TODO: mvoe to SharedSchema
const partialTagsRaw = `
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(communityId: $communityId, community: $community, thread: $thread) {
      id
      title
      color
      thread
    }
  }
`

const pagedVideos = gql`
  ${pagedVideosRaw}
`
const partialTags = gql`
  ${partialTagsRaw}
`

const schema = {
  pagedVideos,
  pagedVideosRaw,
  partialTags,
  partialTagsRaw,
}

export default schema
