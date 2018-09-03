import gql from 'graphql-tag'

const pagedPostsRaw = `
  query($filter: PagedArticleFilter) {
    pagedPosts(filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
        tags {
          title
          color
          id
        }
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
