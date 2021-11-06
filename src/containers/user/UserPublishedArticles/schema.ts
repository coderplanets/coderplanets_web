import { gql } from '@urql/core'
import { P } from '@/schemas'

const pagedPublishedPosts = gql`
  ${P.pagedPublishedPosts}
`

const schema = {
  pagedPublishedPosts,
}

export default schema
