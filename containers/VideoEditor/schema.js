import gql from 'graphql-tag'

const createVideo = gql`
  mutation(
    $title: String!
    $poster: String!
    $thumbnil: String!
    $desc: String!
    $duration: String!
    $durationSec: Int!
    $source: String!
    $link: String!
    $originalAuthor: String!
    $originalAuthorLink: String!
    $publishAt: String!
    $communityId: ID!
    $tags: [Ids]
  ) {
    createVideo(
      title: $title
      poster: $poster
      thumbnil: $thumbnil
      desc: $desc
      duration: $duration
      durationSec: $durationSec
      source: $source
      link: $link
      originalAuthor: $originalAuthor
      originalAuthorLink: $originalAuthorLink
      publishAt: $publishAt
      communityId: $communityId
      tags: $tags
    ) {
      title
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
