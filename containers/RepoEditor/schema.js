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
const repository = `
  query ($owner: String!, $name: String!){
    repository(owner: $owner, name: $name) {
      name
      description
      url
      licenseInfo {
        key
      }
      object(expression: "master:README.md") {
        ... on Blob {
         text
        }
      }
      forkCount
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
      homepageUrl
      owner {
        login
        url
      }
      primaryLanguage {
        name
        color
      }
      releases(last: 1) {
        nodes {
          name
          tag {
            name
          }
        }
      }
    }
  }
`

const schema = {
  createRepo,
  repository,
}

export default schema
