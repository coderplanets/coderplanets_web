import gql from 'graphql-tag'
import { S } from '../fragments'

const schema = {
  pagedPosts: gql`
    ${S.pagedPosts}
  `,
  partialTags: gql`
    ${S.partialTags}
  `,
}

export default schema
