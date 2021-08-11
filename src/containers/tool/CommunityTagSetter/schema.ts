import { gql } from '@urql/core'
import { F } from '@/schemas'

const searchCommunities = gql`
  query($title: String!) {
    searchCommunities(title: $title) {
      entries {
        ${F.community}
      }
    }
  }
`

const schema = {
  searchCommunities,
}

export default schema
