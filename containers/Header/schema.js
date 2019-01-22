import gql from 'graphql-tag'
// import { F } from 'schemas'

const setCustomization = gql`
  mutation($customization: CustomizationInput!) {
    setCustomization(customization: $customization) {
      id
      customization {
        bannerLayout
        contentDivider
        contentHover
        markViewed
        displayDensity
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
      }
    }
  }
`

const schema = {
  setCustomization,
  sessionState,
}

export default schema
