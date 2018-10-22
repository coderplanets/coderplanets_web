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

const schema = {
  repo,
  repoReactionRes,
}

export default schema
