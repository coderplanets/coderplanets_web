import gql from 'graphql-tag'

const cheatsheet = gql`
  query($community: String!) {
    cheatsheet(community: $community) {
      id
      views
      readme
      lastSync
      contributors {
        avatar
        nickname
        htmlUrl
        bio
        location
        company
      }
    }
  }
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
