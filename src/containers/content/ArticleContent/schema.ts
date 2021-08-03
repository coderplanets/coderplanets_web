import { gql } from '@urql/core'
import { P } from '@/schemas'

const post = gql`
  ${P.post}
`
const schema = {
  post,
}

export default schema
