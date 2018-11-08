import gql from 'graphql-tag'
import { F } from '../schemas'

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
        geoCity
        nickname
        avatar
        bio
        fromGithub
        location
        qq
        weibo
        weichat
        sex
        cmsPassport
        customization {
          ${F.c11n}
        }
        githubProfile {
          htmlUrl
          login
        }
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
