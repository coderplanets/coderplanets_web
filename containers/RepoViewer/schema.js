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
      favoritedCount
      favoritedCategoryId @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      author {
        ${F.author}
      }
    }
  }
`

const schema = {
  repo,
}

export default schema
