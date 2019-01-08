import gql from 'graphql-tag'

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
const deleteJob = gql`
  mutation($id: ID!) {
    deleteJob(id: $id) {
      id
    }
  }
`

const schema = {
  pinPost,
  undoPinPost,

  // job
  pinJob,
  undoPinJob,
  deletePost,
  deleteJob,
}

export default schema
