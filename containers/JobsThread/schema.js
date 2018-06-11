import gql from 'graphql-tag'

const pagedJobs = gql`
  query pagedJobs($filter: PagedArticleFilter) {
    pagedJobs(filter: $filter) {
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
  pagedJobs,
}

export default schema
