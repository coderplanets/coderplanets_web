import gql from 'graphql-tag'
import { F } from '@schemas'

const publishedPostComments = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedPostComments(userId: $userId, filter: $filter) {
      entries {
        ${F.comment}
        post {
          ${F.commentParent}
        }
      }
      ${F.pagedCounts}
    }
  }
`

const publishedJobComments = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedJobComments(userId: $userId, filter: $filter) {
      entries {
        ${F.comment}
        job {
          ${F.commentParent}
          company
        }
      }
      ${F.pagedCounts}
    }
  }
`

const publishedVideoComments = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedVideoComments(userId: $userId, filter: $filter) {
      entries {
        ${F.comment}
        video {
          ${F.commentParent}
        }
      }
      ${F.pagedCounts}
    }
  }
`

const publishedRepoComments = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedRepoComments(userId: $userId, filter: $filter) {
      entries {
        ${F.comment}
        repo {
          ${F.commentParent}
          ownerName
        }
      }
      ${F.pagedCounts}
    }
  }
`

const schema = {
  publishedPostComments,
  publishedJobComments,
  publishedVideoComments,
  publishedRepoComments,
}

export default schema
