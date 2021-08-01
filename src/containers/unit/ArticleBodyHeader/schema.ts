import { gql } from '@urql/core'
import { P } from '@/schemas'

// post
const pinPost = gql`
  mutation($id: ID!, $communityId: ID!) {
    pinPost(id: $id, communityId: $communityId) {
      id
    }
  }
`
const undoPinPost = gql`
  mutation($id: ID!, $communityId: ID!) {
    undoPinPost(id: $id, communityId: $communityId) {
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
  mutation($communityId: ID!, $thread: CmsThread, $id: ID!) {
    setRefinedTag(communityId: $communityId, thread: $thread, id: $id) {
      id
      title
    }
  }
`
const unsetRefinedTag = gql`
  mutation($communityId: ID!, $thread: CmsThread, $id: ID!) {
    unsetRefinedTag(communityId: $communityId, thread: $thread, id: $id) {
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
