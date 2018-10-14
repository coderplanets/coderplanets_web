import gql from 'graphql-tag'

const post = gql`
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      id
      title
      body
      views
      author {
        id
        nickname
        avatar
      }
      linkAddr
      insertedAt
      updatedAt
      favoritedCount
      starredCount
      viewerHasFavorited @include(if: $userHasLogin)
      viewerHasStarred @include(if: $userHasLogin)
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
const job = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    job(id: $id) {
      id
      title
      body
      company
      companyLogo
      location
      views
      author {
        id
        nickname
        avatar
      }
      linkAddr
      insertedAt
      updatedAt
      favoritedCount
      viewerHasFavorited @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
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

const schema = {
  post,
  postReactionRes,
  job,
  jobReactionRes,
  // viewerReactions,
  reaction,
  undoReaction,
}

export default schema
