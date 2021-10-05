import { gql } from '@urql/core'
import { F } from '@/schemas'

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

const upvotePost = gql`
  mutation ($id: ID!) {
    upvotePost(id: $id) {
      id
      upvotesCount
    }
  }
`

const undoUpvotePost = gql`
  mutation ($id: ID!) {
    undoUpvotePost(id: $id) {
      id
      upvotesCount
    }
  }
`

const schema = {
  pagedCommentsParticipants,
  upvotePost,
  undoUpvotePost,
}

export default schema
