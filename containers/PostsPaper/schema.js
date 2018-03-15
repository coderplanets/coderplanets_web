import gql from 'graphql-tag'

const pagedPostsRes = 'pagedPosts'
const pagedPosts = gql`
  query pagedPosts($filter: PagedArticleFilter) {
    pagedPosts(filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  pagedPosts,
  pagedPostsRes,
}

export default schema
