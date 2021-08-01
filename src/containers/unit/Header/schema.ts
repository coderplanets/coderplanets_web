import { gql } from '@urql/core'
import { P } from '@/schemas'

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

const sessionState = gql`
  ${P.sessionState}
`

const schema = {
  setCustomization,
  sessionState,
}

export default schema
