import gql from 'graphql-tag'
import { F } from '@/schemas'

const repo = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    repo(id: $id) {
      ${F.repo}
      tags {
        ${F.tag}
      }
      origialCommunity {
        ${F.community}
      }
      watchCount
      ownerUrl
      repoUrl
      homepageUrl
      readme
      issuesCount
      releaseTag
      lastSync
      favoritedCount
      favoritedCategoryId @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
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
      ${F.repo}
      watchCount
      ownerUrl
      repoUrl
      homepageUrl
      readme
      issuesCount
      releaseTag
      lastSync
      favoritedCount
      updatedAt
    }
  }
`

const schema = {
  repo,
  updateRepo,
}

export default schema
