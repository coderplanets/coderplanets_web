import gql from 'graphql-tag'
import { F } from '../schemas'

const repo = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    repo(id: $id) {
      ${F.repo}
      watchCount
      ownerUrl
      repoUrl
      homepageUrl
      readme
      issuesCount
      releaseTag
      lastSync
      favoritedCategoryId @include(if: $userHasLogin)
      author {
        ${F.author}
      }
    }
  }
`

const repoReactionRes = gql`
  query($id: ID!) {
    repo(id: $id) {
      id
      favoritedCategoryId
      viewerHasFavorited
      favoritedCount
    }
  }
`

const pinRepo = gql`
  mutation($id: ID!, $communityId: ID!) {
    pinRepo(id: $id, communityId: $communityId) {
      id
    }
  }
`
const undoPinRepo = gql`
  mutation($id: ID!, $communityId: ID!) {
    undoPinRepo(id: $id, communityId: $communityId) {
      id
    }
  }
`

const schema = {
  repo,
  repoReactionRes,
  pinRepo,
  undoPinRepo,
}

export default schema
