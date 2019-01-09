import gql from 'graphql-tag'
import { F, P } from '../schemas'

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
      commentsParticipators {
        ${F.author}
      }
      favoritedCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
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
  job,
  setTag,
  unsetTag,
}

export default schema
