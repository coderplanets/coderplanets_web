import gql from 'graphql-tag'
import { P } from '../schemas'

const schema = {
  pagedPosts: gql`
    ${P.pagedPosts}
  `,
  partialTags: gql`
    ${P.partialTags}
  `,
}

export default schema
