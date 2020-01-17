import gql from 'graphql-tag'
import { P } from '@schemas'

const job = gql`
  ${P.job}
`
const partialTags = gql`
  ${P.partialTags}
`
const schema = {
  job,
  partialTags,
}

export default schema
