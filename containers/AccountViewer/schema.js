import gql from 'graphql-tag'
import { F } from '../schemas'

const user = gql`
  query user($id: ID!) {
    user(id: $id) {
      ${F.user}

      achievement {
        ${F.achievement}
      }
      ${F.userBackgrounds}
      fromGithub
      githubProfile {
        htmlUrl
        login
      }
      ${F.userContributes}
    }
  }
`
// TODO: use user schema
const account = gql`
  query account {
    account {
      ${F.user}
      achievement {
        ${F.achievement}
      }
      ${F.userBackgrounds}

      githubProfile {
        htmlUrl
        login
      }
      ${F.userContributes}
    }
  }
`

const schema = {
  account,
  user,
}

export default schema
