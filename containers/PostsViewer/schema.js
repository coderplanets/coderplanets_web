import gql from 'graphql-tag'

const allUser2 = gql`
  {
    content(id: 21) {
      title
      body
      ... on Post {
        views
      }
    }
  }
`

const createUser = gql`
  mutation(
    $username: String
    $nickname: String
    $bio: String
    $company: String
  ) {
    createUser(
      username: $username
      nickname: $nickname
      bio: $bio
      company: $company
    ) {
      username
    }
  }
`

const schema = {
  allUser2,
  createUser,
}

export default schema
