import gql from 'graphql-tag'
import { P } from '@schemas'

const user = gql`
  query user($login: String!, $userHasLogin: Boolean!) {
    user(login: $login) {
      viewerHasFollowed @include(if: $userHasLogin)
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
  user,
  follow,
  undoFollow,
}

export default schema
