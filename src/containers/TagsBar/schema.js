import gql from 'graphql-tag'
import { F } from '@schemas'

const partialTags = gql`
  query($communityId: ID, $community: String, $thread: CmsThread!, $topic: String) {
    partialTags(communityId: $communityId, community: $community, thread: $thread, topic: $topic) {
      ${F.tag}
    }
  }
`

const schema = {
  partialTags,
}

export default schema
