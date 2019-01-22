import gql from 'graphql-tag'
import { P } from 'schemas'

const wiki = gql`
  ${P.wiki}
`
const syncWiki = gql`
  mutation($communityId: ID!, $readme: String!, $lastSync: String!) {
    syncWiki(communityId: $communityId, readme: $readme, lastSync: $lastSync) {
      id
      readme
    }
  }
`
const addWikiContributor = gql`
  mutation($id: ID!, $contributor: GithubContributorInput!) {
    addWikiContributor(id: $id, contributor: $contributor) {
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
  wiki,
  syncWiki,
  addWikiContributor,
}

export default schema
