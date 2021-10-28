import { gql } from '@urql/core'
import { F } from '@/schemas'

const pagedArticleTags = gql`
  query ($filter: ArticleTagsFilter) {
    pagedArticleTags(filter: $filter) {
      entries {
        id
        title
        raw
        color
        thread
        extra
        group
        community {
          id
          title
          logo
        }
      }
      totalCount
      totalPages
      pageSize
      pageNumber
    }
  }
`

const searchCommunities = gql`
  query($title: String!, $category: String) {
    searchCommunities(title: $title, category: $category) {
      entries {
        ${F.community}
      }
    }
  }
`

const schema = {
  searchCommunities,
  pagedArticleTags,
}

export default schema
