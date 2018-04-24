import gql from 'graphql-tag'

const community = gql`
  query community($id: ID, $title: String) {
    community(id: $id, title: $title) {
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

const schema = {
  community,
}

export default schema
