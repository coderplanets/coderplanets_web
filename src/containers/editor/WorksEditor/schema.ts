import { gql } from '@urql/core'
import { P } from '@/schemas'

const createWorks = gql`
  mutation (
    $cover: String!
    $title: String!
    $homeLink: String!
    $desc: String
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
      cover: $cover
      title: $title
      desc: $desc
      homeLink: $homeLink
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

const updateWorks = gql`
  mutation (
    $id: ID!
    $title: String
    $cover: String
    $desc: String
    $homeLink: String
    $body: String
    $profitMode: ProfitMode
    $workingMode: WorkingMode
    $cities: [String]
    $techstacks: [String]
    $socialInfo: [SocialInfo]
    $appStore: [AppStoreInfo]
    $articleTags: [Ids]
  ) {
    updateWorks(
      id: $id
      title: $title
      cover: $cover
      desc: $desc
      homeLink: $homeLink
      body: $body
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

const works = gql`
  ${P.works}
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
  updateWorks,
  works,
  community,
}

export default schema
