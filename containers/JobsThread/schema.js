import gql from 'graphql-tag'
import { P } from 'schemas'

const schema = {
  pagedJobs: gql`
    ${P.pagedJobs}
  `,
  partialTags: gql`
    ${P.partialTags}
  `,
}

export default schema
