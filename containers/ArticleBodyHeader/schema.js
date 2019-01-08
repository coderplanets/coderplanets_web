import gql from 'graphql-tag'

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
}

export default schema
