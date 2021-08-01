import { gql } from '@urql/core'
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
