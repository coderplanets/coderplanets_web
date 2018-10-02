import gql from 'graphql-tag'

const wiki = gql`
  query($community: String!) {
    wiki(community: $community) {
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
