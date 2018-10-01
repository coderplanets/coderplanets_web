import gql from 'graphql-tag'

const createRepo = gql`
  mutation(
    $title: String!
    $ownerName: String!
    $ownerUrl: String!
    $repoUrl: String!
    $desc: String!
    $homepageUrl: String
    $readme: String!
    $starCount: Int!
    $issuesCount: Int!
    $prsCount: Int!
    $forkCount: Int!
    $watchCount: Int!
    $license: String
    $releaseTag: String
    $primaryLanguage: RepoLangInput
    $contributors: [RepoContributorInput]
    $communityId: ID!
    $tags: [Ids]
  ) {
    createRepo(
      title: $title
      ownerName: $ownerName
      ownerUrl: $ownerUrl
      repoUrl: $repoUrl
      desc: $desc
      homepageUrl: $homepageUrl
      readme: $readme
      starCount: $starCount
      issuesCount: $issuesCount
      prsCount: $prsCount
      forkCount: $forkCount
      watchCount: $watchCount
      primaryLanguage: $primaryLanguage
      license: $license
      releaseTag: $releaseTag
      contributors: $contributors
      communityId: $communityId
      tags: $tags
    ) {
      id
      title
      desc
    }
  }
`

const schema = {
  createRepo,
}

export default schema
