import { gql } from '@urql/core'
import { F, P } from '@/schemas'

const post = gql`
  ${P.post}
`
const job = gql`
  ${P.job}
`
const blog = gql`
  ${P.blog}
`
const radar = gql`
  ${P.radar}
`
const works = gql`
  ${P.works}
`

const setTag = gql`
  ${P.setTag}
`
const unsetTag = gql`
  ${P.unsetTag}
`

const postComment = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      commentsParticipants {
        ${F.author}
      }
      commentsCount
    }
  }
`

const schema = {
  post,
  job,
  blog,
  radar,
  works,
  setTag,
  unsetTag,
  postComment,
}

export default schema
