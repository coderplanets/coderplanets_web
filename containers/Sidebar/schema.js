import gql from 'graphql-tag'
import { F } from 'schemas'

const subscribedCommunities = gql`
  query subscribedCommunities($userId: ID, $filter: PagedFilter!) {
    subscribedCommunities(userId: $userId, filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
      }
    }
  }
`

const setCustomization = gql`
  mutation(
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
  // communities,
  subscribedCommunities,
  setCustomization,
}

export default schema
