import gql from 'graphql-tag'

const githubSigninRes = 'githubSignin'
const githubSignin = gql`
  mutation($code: String!) {
    githubSignin(code: $code) {
      token
      user {
        nickname
        bio
      }
    }
  }
`

const sessionState = gql`
  query {
    sessionState {
      isValid
      user {
        id
        nickname
        avatar
        bio
        fromGithub
        location
        qq
        weibo
        weichat
        sex
        githubProfile {
          htmlUrl
          login
        }
      }
    }
  }
`
const schema = {
  sessionState,
  githubSignin,
  githubSigninRes,
}

export default schema
