import gql from 'graphql-tag'
import { P } from '../schemas'

const reaction = gql`
  ${P.reaction}
`
const undoReaction = gql`
  ${P.undoReaction}
`

const postReactionRes = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      favoritedCount
      starredCount
      viewerHasFavorited
      viewerHasStarred
      favoritedCategoryId
    }
  }
`
const jobReactionRes = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      favoritedCount
      viewerHasFavorited
      favoritedCategoryId
    }
  }
`
const videoReactionRes = gql`
  query($id: ID!) {
    video(id: $id) {
      id
      favoritedCount
      starredCount
      viewerHasFavorited
      viewerHasStarred
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
  reaction,
  undoReaction,
  postReactionRes,
  jobReactionRes,
  videoReactionRes,
  repoReactionRes,
}

export default schema
