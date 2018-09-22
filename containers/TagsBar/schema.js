import gql from 'graphql-tag'

const partialTagsRaw = `
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(communityId: $communityId, community: $community, thread: $thread) {
      id
      title
      color
      thread
    }
  }
`
const partialTags = gql`
  ${partialTagsRaw}
`
const schema = {
  partialTags,
  partialTagsRaw,
}

export default schema
