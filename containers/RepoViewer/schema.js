import gql from 'graphql-tag'

const simpleMutation = gql`
  mutation($id: ID!) {
    post(id: $id) {
      id
    }
  }
`
const repo = gql`
  query($id: ID!) {
    repo(id: $id) {
      id
      title
      desc
      ownerName
      ownerUrl
      repoUrl
      homepageUrl
      readme
      starCount
      issuesCount
      prsCount
      forkCount
      watchCount
      primaryLanguage {
        color
        name
      }
      license
      releaseTag
      contributors {
        avatar
        htmlUrl
        nickname
      }
    }
  }
`

const schema = {
  simpleMutation,
  repo,
}

export default schema
