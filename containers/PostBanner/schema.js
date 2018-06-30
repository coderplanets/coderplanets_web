import gql from 'graphql-tag'

const postRaw = `
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      body
      insertedAt
      updatedAt
      views
      length
      author {
        id
        avatar
        nickname
      }
      favoritedCount
      starredCount
      communities {
        id
        title
        logo
      }
      tags {
        id
        title
        color
      }
    }
  }
`

const post = gql`
  ${postRaw}
`

const schema = { post, postRaw }

export default schema
