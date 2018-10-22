import gql from 'graphql-tag'
import { F } from '../schemas'

const pagedUsers = gql`
  query($filter: PagedUsersFilter!) {
    pagedUsers(filter: $filter) {
      entries {
        ${F.author}
        location
      }
      ${F.pagedCounts}
    }
  }
`
const pagedFollowers = gql`
  query($userId: ID, $filter: PagedFilter!, $userHasLogin: Boolean!) {
    pagedFollowers(userId: $userId, filter: $filter) {
      entries {
        ${F.author}
        location
        viewerHasFollowed @include(if: $userHasLogin)
      }
      totalCount
    }
  }
`

const pagedFollowings = gql`
  query($userId: ID, $filter: PagedFilter!, $userHasLogin: Boolean!) {
    pagedFollowings(userId: $userId, filter: $filter) {
      entries {
        ${F.author}
        location
        viewerHasFollowed @include(if: $userHasLogin)
      }
      totalCount
    }
  }
`
const communityEditors = gql`
  query($id: ID!, $filter: PagedFilter!) {
    communityEditors(id: $id, filter: $filter) {
      entries {
        ${F.author}
        location
      }
      ${F.pagedCounts}
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
        ${F.author}
        location
        geoCity
        viewerHasFollowed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`

const follow = gql`
  mutation($userId: ID!) {
    follow(userId: $userId) {
      id
      viewerHasFollowed
    }
  }
`

const undoFollow = gql`
  mutation($userId: ID!) {
    undoFollow(userId: $userId) {
      id
      viewerHasFollowed
    }
  }
`

const schema = {
  pagedUsers,
  reactionUsers,
  pagedFollowers,
  pagedFollowings,
  communityEditors,

  follow,
  undoFollow,
}

export default schema
