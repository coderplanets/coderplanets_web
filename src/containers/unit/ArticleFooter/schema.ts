import { gql } from '@urql/core'
import { P } from '@/schemas'

const follow = gql`
  ${P.follow}
`

const undoFollow = gql`
  ${P.undoFollow}
`

const user = gql`
  query user($login: String) {
    user(login: $login) {
      viewerHasFollowed
    }
  }
`

const schema = {
  user,
  follow,
  undoFollow,
}

export default schema
