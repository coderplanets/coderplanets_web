import gql from 'graphql-tag'

const partialTags = gql`
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(
      communityId: $communityId
      community: $community
      thread: $thread
    ) {
      id
      title
      color
      thread
    }
  }
`

const schema = {
  partialTags,
}

export default schema
