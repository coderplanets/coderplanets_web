import { gql } from '@urql/core'
import { F } from '@/schemas'
import { titleCase } from '@/utils/helper'

const pagedCommentsParticipants = gql`
  query($id: ID!, $thread: Thread, $filter: PagedFilter!) {
    pagedCommentsParticipants(id: $id, thread: $thread, filter: $filter) {
      entries {
        ${F.author}
      }
      ${F.pagedCounts}
      
    }
  }
`

const getUpvoteSchema = (thread) => {
  return gql`
    mutation ($id: ID!) {
      upvote${titleCase(thread)}(id: $id) {
        id
        upvotesCount
      }
    }
  `
}

const getUndoUpvoteSchema = (thread) => {
  return gql`
    mutation ($id: ID!) {
      undoUpvote${titleCase(thread)}(id: $id) {
        id
        upvotesCount
      }
    }
  `
}

const schema = {
  pagedCommentsParticipants,
  getUpvoteSchema,
  getUndoUpvoteSchema,
}

export default schema
