import gql from 'graphql-tag'
import { P } from 'schemas'

// post
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

const deletePost = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`
// job
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
const deleteJob = gql`
  mutation($id: ID!) {
    deleteJob(id: $id) {
      id
    }
  }
`
// video
const pinVideo = gql`
  mutation($id: ID!, $communityId: ID!) {
    pinVideo(id: $id, communityId: $communityId) {
      id
    }
  }
`
const undoPinVideo = gql`
  mutation($id: ID!, $communityId: ID!) {
    undoPinVideo(id: $id, communityId: $communityId) {
      id
    }
  }
`

const deleteVideo = gql`
  mutation($id: ID!) {
    deleteVideo(id: $id) {
      id
    }
  }
`

// repo
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
const deleteRepo = gql`
  mutation($id: ID!) {
    deleteRepo(id: $id) {
      id
    }
  }
`

// refined tag
const setRefinedTag = gql`
  mutation($communityId: ID!, $thread: CmsThread, $topic: String, $id: ID!) {
    setRefinedTag(
      communityId: $communityId
      thread: $thread
      topic: $topic
      id: $id
    ) {
      id
      title
    }
  }
`
const unsetRefinedTag = gql`
  mutation($communityId: ID!, $thread: CmsThread, $topic: String, $id: ID!) {
    unsetRefinedTag(
      communityId: $communityId
      thread: $thread
      topic: $topic
      id: $id
    ) {
      id
      title
    }
  }
`

const setTag = gql`
  ${P.setTag}
`
const unsetTag = gql`
  ${P.unsetTag}
`

const schema = {
  // post
  pinPost,
  undoPinPost,
  deletePost,
  // job
  pinJob,
  undoPinJob,
  deleteJob,
  // video
  pinVideo,
  undoPinVideo,
  deleteVideo,
  // repo
  pinRepo,
  undoPinRepo,
  deleteRepo,
  // refined tag
  setRefinedTag,
  unsetRefinedTag,
  // tag
  setTag,
  unsetTag,
}

export default schema
