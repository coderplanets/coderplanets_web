import gql from 'graphql-tag'

const githubSignin = gql`
  mutation($code: String!) {
    githubSignin(code: $code) {
      token
      user {
        id
        avatar
        nickname
        bio
        fromGithub
      }
    }
  }
`
const searchPosts = gql`
  query($title: String!) {
    searchPosts(title: $title) {
      entries {
        id
        title
        digest
        views
      }
      totalCount
    }
  }
`

const schema = {
  githubSignin,
  searchPosts,
}

export default schema
