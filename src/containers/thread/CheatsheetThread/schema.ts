import gql from 'graphql-tag'
import { P } from '@/schemas'

const cheatsheet = gql`
  ${P.cheatsheet}
`
const syncCheatsheet = gql`
  mutation($communityId: ID!, $readme: String!, $lastSync: String!) {
    syncCheatsheet(
      communityId: $communityId
      readme: $readme
      lastSync: $lastSync
    ) {
      id
      readme
    }
  }
`
const addCheatsheetContributor = gql`
  mutation($id: ID!, $contributor: GithubContributorInput!) {
    addCheatsheetContributor(id: $id, contributor: $contributor) {
      id
      readme
      contributors {
        nickname
        avatar
        bio
        company
        location
        htmlUrl
      }
    }
  }
`

const schema = {
  cheatsheet,
  syncCheatsheet,
  addCheatsheetContributor,
}

export default schema
