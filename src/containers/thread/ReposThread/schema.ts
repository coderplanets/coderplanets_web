import gql from 'graphql-tag'
import { P } from '@/schemas'

const schema = {
  pagedRepos: gql`
    ${P.pagedRepos}
  `,
  partialTags: gql`
    ${P.partialTags}
  `,
}

export default schema
