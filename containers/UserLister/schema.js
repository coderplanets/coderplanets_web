import gql from 'graphql-tag'

const pagedUsers = gql`
  query($filter: PagedUsersFilter!) {
    pagedUsers(filter: $filter) {
      entries {
        id
        nickname
        avatar
        location
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
const pagedFollowers = gql`
  query($userId: ID, $filter: PagedFilter!) {
    pagedFollowers(userId: $userId, filter: $filter) {
      entries {
        id
        nickname
        avatar
        location
      }
      totalCount
    }
  }
`

const pagedFollowings = gql`
  query($userId: ID, $filter: PagedFilter!) {
    pagedFollowings(userId: $userId, filter: $filter) {
      entries {
        id
        nickname
        avatar
        location
      }
      totalCount
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
  reactionUsers,
  pagedFollowers,
  pagedFollowings,
  communityEditors,
}

export default schema
