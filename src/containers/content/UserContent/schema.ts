import gql from 'graphql-tag'

const follow = gql`
  mutation($userId: ID!) {
    follow(userId: $userId) {
      id
    }
  }
`
const undoFollow = gql`
  mutation($userId: ID!) {
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

const schema = {
  follow,
  undoFollow,
  user,
}

export default schema
