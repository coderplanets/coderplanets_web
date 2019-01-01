import gql from 'graphql-tag'
import { F } from '../schemas'

/*
   communities {
   ${F.community}
   }

   commentsParticipators {
   ${F.author}
   }
 */

const post = gql`
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.post}
      body
      author {
        ${F.author}
      }
      tags {
        ${F.tag}
      }
      commentsCount
      linkAddr
      insertedAt
      favoritedCount
      starredCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      viewerHasStarred @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
`
const postComment = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      commentsParticipators {
        ${F.author}
      }
      commentsCount
    }
  }
`

const job = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    job(id: $id) {
      ${F.job}
      body
      author {
        ${F.author}
      }
      tags {
        ${F.tag}
      }
      communities {
        ${F.community}
      }
      favoritedCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
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
const reaction = gql`
  mutation($id: ID!, $action: String!, $thread: CmsThread!) {
    reaction(id: $id, action: $action, thread: $thread) {
      id
    }
  }
`

const undoReaction = gql`
  mutation($id: ID!, $action: String!, $thread: CmsThread!) {
    undoReaction(id: $id, action: $action, thread: $thread) {
      id
    }
  }
`
const setTag = gql`
  mutation($thread: String!, $id: ID!, $tagId: ID!, $communityId: ID!) {
    setTag(thread: $thread, id: $id, tagId: $tagId, communityId: $communityId) {
      id
      title
    }
  }
`
const unsetTag = gql`
  mutation($thread: String!, $id: ID!, $tagId: ID!, $communityId: ID!) {
    unsetTag(
      thread: $thread
      id: $id
      tagId: $tagId
      communityId: $communityId
    ) {
      id
      title
    }
  }
`
const pinPost = gql`
  mutation($id: ID!, $communityId: ID!, $topic: String) {
    pinPost(id: $id, communityId: $communityId, topic: $topic) {
      id
    }
  }
`
const undoPinPost = gql`
  mutation($id: ID!, $communityId: ID!, $topic: String) {
    undoPinPost(id: $id, communityId: $communityId, topic: $topic) {
      id
    }
  }
`
const pinJob = gql`
  mutation($id: ID!, $communityId: ID!) {
    pinJob(id: $id, communityId: $communityId) {
      id
    }
  }
`
const undoPinJob = gql`
  mutation($id: ID!, $communityId: ID!) {
    undoPinJob(id: $id, communityId: $communityId) {
      id
    }
  }
`
const deletePost = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`
const schema = {
  post,
  postComment,
  postReactionRes,
  deletePost,
  job,
  jobReactionRes,
  // viewerReactions,
  reaction,
  undoReaction,
  setTag,
  unsetTag,
  pinPost,
  undoPinPost,
  pinJob,
  undoPinJob,
}

export default schema
