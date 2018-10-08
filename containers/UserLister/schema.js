import gql from 'graphql-tag'

const pagedUsers = gql`
  query($filter: PagedUsersFilter!) {
    pagedUsers(filter: $filter) {
      entries {
        id
        nickname
        avatar
        location
        bio
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  pagedUsers,
}

export default schema
