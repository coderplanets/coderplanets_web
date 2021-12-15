import { gql } from '@urql/core'
import { P } from '@/schemas'

const follow = gql`
  ${P.follow}
`

const undoFollow = gql`
  ${P.undoFollow}
`

const schema = {
  follow,
  undoFollow,
}

export default schema
