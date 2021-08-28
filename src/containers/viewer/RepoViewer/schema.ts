import { gql } from '@urql/core'
import { F } from '@/schemas'

const repo = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    repo(id: $id) {
      ${F.article}
      watchCount
      ownerUrl
      repoUrl
      homepageUrl
      readme
      issuesCount
      releaseTag
      lastSync
      collectsCount
      favoritedCategoryId @include(if: $userHasLogin)
      viewerHasCollected @include(if: $userHasLogin)
      author {
        ${F.author}
      }
      updatedAt
    }
  }
`

const updateRepo = gql`
  mutation(
    $id: ID!
    $title: String
    $ownerName: String
    $ownerUrl: String
    $repoUrl: String
    $desc: String
    $homepageUrl: String
    $readme: String
    $starCount: Int
    $issuesCount: Int
    $prsCount: Int
    $forkCount: Int
    $watchCount: Int
    $license: String
    $releaseTag: String
    $primaryLanguage: RepoLangInput
    $contributors: [RepoContributorInput]
  ) {
    updateRepo(
      id: $id
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
    ) {
      ${F.article}
      watchCount
      ownerUrl
      repoUrl
      homepageUrl
      readme
      issuesCount
      releaseTag
      lastSync
      collectsCount
      updatedAt
    }
  }
`

const schema = {
  repo,
  updateRepo,
}

export default schema
