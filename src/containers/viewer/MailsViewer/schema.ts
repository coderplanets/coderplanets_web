import { gql } from '@urql/core'
import { P } from '@/schemas'

const mentions = gql`
  ${P.mentions}
`

const schema = {
  mentions,
}

export default schema
