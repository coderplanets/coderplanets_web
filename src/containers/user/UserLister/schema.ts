import { gql } from '@urql/core'
import { F, P } from '@/schemas'

const pagedUsers = gql`
  query($filter: PagedUsersFilter!) {
    pagedUsers(filter: $filter) {
      entries {
        ${F.author}
        location
      }
      ${F.pagi}
    }
  }
`

const communitySubscribers = gql`
  query($id: ID, $community: String, $filter: PagedFilter!, $userHasLogin: Boolean!) {
    communitySubscribers(id: $id, community: $community, filter: $filter) {
      entries {
        ${F.author}
        location
        viewerHasFollowed @include(if: $userHasLogin)
      }
      ${F.pagi}
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
  query($id: ID!, $filter: PagedFilter!, $userHasLogin: Boolean!) {
    communityEditors(id: $id, filter: $filter) {
      entries {
        ${F.author}
        location
        viewerHasFollowed @include(if: $userHasLogin)
      }
      ${F.pagi}
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
      ${F.pagi}
    }
  }
`

const follow = gql`
  ${P.follow}
`

const undoFollow = gql`
  ${P.undoFollow}
`

const schema = {
  pagedUsers,
  communitySubscribers,
  reactionUsers,
  pagedFollowers,
  pagedFollowings,
  communityEditors,

  follow,
  undoFollow,
}

export default schema
