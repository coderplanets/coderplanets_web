import gql from 'graphql-tag'
import { F } from '../schemas'

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
      ${F.repo}
      watchCount
      ownerUrl
      repoUrl
      homepageUrl
      readme
      issuesCount
      releaseTag
      author {
        ${F.author}
      }
    }
  }
`

const schema = {
  simpleMutation,
  repo,
}

export default schema
