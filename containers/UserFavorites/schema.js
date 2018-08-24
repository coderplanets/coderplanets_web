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

const pagedPosts = gql`
  ${pagedPostsRaw}
`

const schema = {
  pagedPosts,
  pagedPostsRaw,
}

export default schema
