import gql from 'graphql-tag'

const posts = gql`
  query posts($filter: ArticleFilter) {
    posts(filter: $filter) {
      title
      id
      starCount
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
  createUser,
  posts,
}

export default schema
