import { gql } from '@urql/core'
import { F } from '@/schemas'

const subscribedCommunities = gql`
  query subscribedCommunities($login: String, $filter: PagedFilter!) {
    subscribedCommunities(login: $login, filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
      }
      ${F.pagi}
    }
  }
`

const setCustomization = gql`
  mutation (
    $userId: ID
    $customization: CustomizationInput!
    $sidebarCommunitiesIndex: [CommunityIndex]
  ) {
    setCustomization(
      userId: $userId
      customization: $customization
      sidebarCommunitiesIndex: $sidebarCommunitiesIndex
    ) {
      id
    }
  }
`

const schema = {
  subscribedCommunities,
  setCustomization,
}

export default schema
