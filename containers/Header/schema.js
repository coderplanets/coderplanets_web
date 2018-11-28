import gql from 'graphql-tag'
// import { F } from '../schemas'

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
  setCustomization,
}

export default schema
