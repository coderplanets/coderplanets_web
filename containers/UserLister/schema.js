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
const communityEditors = gql`
  query($id: ID!, $filter: PagedFilter!) {
    communityEditors(id: $id, filter: $filter) {
      entries {
        id
        nickname
        avatar
        location
        bio
      }
      totalCount
      totalPages
      pageSize
      pageNumber
    }
  }
`

const reactionUsers = gql`
  query(
    $id: ID!
    $thread: ReactThread
    $action: ReactAction!
    $filter: PagedFilter!
    $userHasLogin: Boolean!
  ) {
    reactionUsers(id: $id, thread: $thread, action: $action, filter: $filter) {
      entries {
        id
        avatar
        nickname
        location
        geoCity
        viewerHasFollowed @include(if: $userHasLogin)
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  pagedUsers,
  communityEditors,
  reactionUsers,
}

export default schema
