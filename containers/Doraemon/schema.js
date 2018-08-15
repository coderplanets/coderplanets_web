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
        from_github
      }
    }
  }
`

const schema = {
  githubSignin,
}

export default schema
