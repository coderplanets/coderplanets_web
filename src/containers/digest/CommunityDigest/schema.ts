import { gql } from '@urql/core'
import { P } from '@/schemas'

const community = gql`
  ${P.community}
`

const schema = {
  community,
}

export default schema
