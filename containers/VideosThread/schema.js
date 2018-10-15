import gql from 'graphql-tag'
import { S } from '../fragments'

const schema = {
  pagedVideos: gql`
    ${S.pagedVideos}
  `,
  partialTags: gql`
    ${S.partialTags}
  `,
}

export default schema
