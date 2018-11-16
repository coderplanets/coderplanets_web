import gql from 'graphql-tag'

const pagedCategories = gql`
  query($filter: PagedFilter!) {
    pagedCategories(filter: $filter) {
      entries {
        id
        title
        raw
        index
      }
      totalCount
      totalPages
      pageSize
      pageNumber
    }
  }
`

const schema = {
  pagedCategories,
}

export default schema
