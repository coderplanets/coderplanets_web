import gql from 'graphql-tag'

const allUser2 = gql`
  {
    allUsers2 {
      entries {
        username
        id
      }
      totalCount
      pageSize
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
