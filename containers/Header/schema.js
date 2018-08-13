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

const loginState = gql`
  query {
    loginState {
      isLogin
      user {
        id
        nickname
        avatar
        bio
        fromGithub
        company
        education
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
  loginState,
  githubSignin,
  githubSigninRes,
}

export default schema
