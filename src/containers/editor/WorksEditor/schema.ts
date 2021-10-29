import { gql } from '@urql/core'

const createWorks = gql`
  mutation (
    $title: String!
    $body: String
    $communityId: ID!
    $profitMode: ProfitMode
    $workingMode: WorkingMode
    $cities: [String]
    $techstacks: [String]
    $socialInfo: [SocialInfo]
    $appStore: [AppStoreInfo]
    $articleTags: [Id]
  ) {
    createWorks(
      title: $title
      body: $body
      communityId: $communityId
      profitMode: $profitMode
      workingMode: $workingMode
      cities: $cities
      techstacks: $techstacks
      socialInfo: $socialInfo
      appStore: $appStore
      articleTags: $articleTags
    ) {
      id
      title
    }
  }
`

// viewer_has_subscribed
const community = gql`
  query ($raw: String) {
    community(raw: $raw) {
      id
      logo
      title
      raw
      desc
      subscribersCount
    }
  }
`

const schema = {
  createWorks,
  community,
}

export default schema
