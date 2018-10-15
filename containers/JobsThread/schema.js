import gql from 'graphql-tag'
import { S } from '../fragments'

const schema = {
  pagedJobs: gql`
    ${S.pagedJobs}
  `,
  partialTags: gql`
    ${S.partialTags}
  `,
}

export default schema
