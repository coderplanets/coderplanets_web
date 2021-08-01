import { gql } from '@urql/core'
import { P } from '@/schemas'

const reaction = gql`
  ${P.reaction}
`
const undoReaction = gql`
  ${P.undoReaction}
`

const post = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      commentsCount
      favoritedCount
      starredCount
      viewerHasFavorited
      viewerHasStarred
      favoritedCategoryId
    }
  }
`
const job = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      favoritedCount
      viewerHasFavorited
      favoritedCategoryId
    }
  }
`
const repo = gql`
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
  reaction,
  undoReaction,
  post,
  job,
  repo,
}

export default schema
