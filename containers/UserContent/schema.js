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

const schema = {
  follow,
  undoFollow,
}

export default schema
