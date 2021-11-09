import { gql } from '@urql/core'
import { F } from '@/schemas'

const follow = gql`
  mutation ($userId: ID!) {
    follow(userId: $userId) {
      id
    }
  }
`
const undoFollow = gql`
  mutation ($userId: ID!) {
    undoFollow(userId: $userId) {
      id
    }
  }
`
const user = gql`
  query user($login: String, $userHasLogin: Boolean!) {
    user(login: $login) {
      followersCount
      followingsCount
      viewerHasFollowed @include(if: $userHasLogin)
    }
  }
`

const editableCommunities = gql`
  query ($login: String, $filter: PagedFilter!) {
    editableCommunities(login: $login, filter: $filter) {
      entries {
        ${F.community}
      }
      ${F.pagi}
    }
  }
`

const pagedPublishedWorks = `
  query($login: String!, $filter: PagedFilter!) {
    pagedPublishedWorks(login: $login, filter: $filter) {
      entries {
        id
        title
        cover
        desc
        homeLink
      }
      ${F.pagi}
    }
  }
`

const schema = {
  follow,
  undoFollow,
  user,
  editableCommunities,
  pagedPublishedWorks,
}

export default schema
