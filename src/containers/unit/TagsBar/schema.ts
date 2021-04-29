import gql from 'graphql-tag'
import { F } from '@/schemas'

const partialTags = gql`
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(communityId: $communityId, community: $community, thread: $thread) {
      ${F.tag}
    }
  }
`

const schema = {
  partialTags,
}

export default schema
