import gql from 'graphql-tag'
// import { F } from '../schemas'

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
      }
    }
  }
`

const setCustomization = gql`
  mutation($customization: CustomizationInput!) {
    setCustomization(customization: $customization) {
      id
      customization {
        bannerLayout
        contentDivider
        markViewed
        displayDensity
      }
    }
  }
`

const schema = {
  sessionState,
  githubSignin,
  githubSigninRes,
  setCustomization,
}

export default schema
