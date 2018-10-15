import gql from 'graphql-tag'
import { S } from '../fragments'

const schema = {
  pagedRepos: gql`
    ${S.pagedRepos}
  `,
  partialTags: gql`
    ${S.partialTags}
  `,
}

export default schema
