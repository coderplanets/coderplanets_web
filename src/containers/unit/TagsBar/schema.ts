import { gql } from '@urql/core'
import { F } from '@/schemas'

const pagedArticleTags = gql`
  query($filter: ArticleTagsFIlter) {
    pagedArticleTags(filter: $filter) {
      ${F.tag}
    }
  }
`

const schema = {
  pagedArticleTags,
}

export default schema
