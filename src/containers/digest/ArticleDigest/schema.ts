import { gql } from '@urql/core'
import { P } from '@/schemas'

const community = gql`
  query community($raw: String) {
    community(raw: $raw) {
      viewerHasSubscribed
      subscribersCount
    }
  }
`

const post = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      commentsCount
      collectsCount
      upvotesCount
      viewerHasCollected
      viewerHasUpvoted
    }
  }
`
const job = gql`
  query ($id: ID!) {
    job(id: $id) {
      id
      collectsCount
      viewerHasCollected
    }
  }
`
const repo = gql`
  query ($id: ID!) {
    repo(id: $id) {
      id
      viewerHasCollected
      collectsCount
    }
  }
`

const blogRssInfo = gql`
  ${P.blogRssInfo}
`

const subscribeCommunity = gql`
  mutation ($communityId: ID!) {
    subscribeCommunity(communityId: $communityId) {
      id
      raw
    }
  }
`
const unsubscribeCommunity = gql`
  mutation ($communityId: ID!) {
    unsubscribeCommunity(communityId: $communityId) {
      id
      raw
    }
  }
`

const schema = {
  community,
  post,
  job,
  repo,
  blogRssInfo,
  subscribeCommunity,
  unsubscribeCommunity,
}

export default schema
