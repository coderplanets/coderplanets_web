import gql from 'graphql-tag'

const createVideo = gql`
  mutation(
    $title: String!
    $poster: String!
    $desc: String!
    $duration: String!
    $duration_sec: String!
    $source: String!
    $link: String!
    $originalAuthor: String!
    $originalAuthorLink: String!
    $publishAt: Datetime!
    $communityId: ID!
    $tags: [Ids]
  ) {
    createVideo(
      title: $title
      post: $poster
      desc: $desc
      duration: $duration
      durationSec: $durationSec
      source: $source
      link: $link
      originalAuthor: $originalAuthor
      originalAuthorLink: $originalAuthorLink
      pulishAt: $publishAt
      communityId: $communityId
      tags: $tags
    ) {
      title
      body
      id
    }
  }
`
const simpleQuery = gql`
  query($filter: filter!) {
    post(id: $id) {
      id
    }
  }
`

const schema = {
  createVideo,
  simpleQuery,
}

export default schema
