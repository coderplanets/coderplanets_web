import gql from 'graphql-tag'

const communityRaw = `
  query community($id: ID, $raw: String) {
    community(id: $id, raw: $raw) {
      id
      title
      desc
      raw
      logo
      threads {
        title
        raw
      }
      subscribersCount
      editorsCount
      postsCount
    }
  }
`

const community = gql`
  ${communityRaw}
`

const schema = {
  community,
  communityRaw,
}

export default schema
