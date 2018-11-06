import gql from 'graphql-tag'
import { F } from '../schemas'

const user = gql`
  query user($id: ID) {
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
      contributes {
        ${F.userContributes}
      }
    }
  }
`
const schema = {
  user,
}

export default schema
