// import { gql } from '@urql/core'
import { F } from '@/schemas'

// const pagedCommentsParticipants = gql`
//   query($id: ID!, $thread: Thread, $filter: PagedFilter!) {
//     pagedCommentsParticipants(id: $id, thread: $thread, filter: $filter) {
//       entries {
//         ${F.author}
//       }
//       ${F.pagi}

//     }
//   }
// `

const schema = {
  // pagedCommentsParticipants,
  getUpvoteSchema: F.getUpvoteSchema,
  getUndoUpvoteSchema: F.getUndoUpvoteSchema,
}

export default schema
