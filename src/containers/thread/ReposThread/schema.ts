import { gql } from '@urql/core'
import { P } from '@/schemas'

const schema = {
  pagedRepos: gql`
    ${P.pagedRepos}
  `,
  pagedArticleTags: gql`
    ${P.pagedArticleTags}
  `,
}

export default schema
