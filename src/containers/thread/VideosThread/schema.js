import gql from 'graphql-tag'
import { P } from '@schemas'

const schema = {
  pagedVideos: gql`
    ${P.pagedVideos}
  `,
  partialTags: gql`
    ${P.partialTags}
  `,
}

export default schema
