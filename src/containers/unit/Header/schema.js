import gql from 'graphql-tag'
import { P } from '@/schemas'

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
  ${P.sessionState}
`

const schema = {
  setCustomization,
  sessionState,
}

export default schema
