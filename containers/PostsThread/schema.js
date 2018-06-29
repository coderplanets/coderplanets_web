import gql from 'graphql-tag'

const pagedPostsRaw = `
  query pagedPosts($filter: PagedArticleFilter) {
    pagedPosts(filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
        author {
          id
          avatar
          nickname
        }
        commentsParticipatorsCount
        commentsParticipators(filter: { first: 5 }) {
          id
          nickname
          avatar
        }
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
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

const pagedPosts = gql`
  ${pagedPostsRaw}
`
const partialTags = gql`
  ${partialTagsRaw}
`

const schema = {
  pagedPosts,
  pagedPostsRaw,
  partialTags,
  partialTagsRaw,
}

export default schema
