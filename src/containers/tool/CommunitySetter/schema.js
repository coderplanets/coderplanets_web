import gql from 'graphql-tag'
import { F } from '@/schemas'

const pagedCommunities = gql`
  query($filter: CommunitiesFilter!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
      }
      ${F.pagedCounts}
    }
  }
`
const searchCommunities = gql`
  query($title: String!) {
    searchCommunities(title: $title) {
      entries {
        ${F.community}
      }
      ${F.pagedCounts}
    }
  }
`
const setCommunity = gql`
  mutation($id: ID!, $communityId: ID!) {
    setCommunity(id: $id, communityId: $communityId) {
      id
    }
  }
`
const unsetCommunity = gql`
  mutation($id: ID!, $communityId: ID!) {
    unsetCommunity(id: $id, communityId: $communityId) {
      id
    }
  }
`

const post = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      communities {
        ${F.community}
      }
    }
  }
`

const schema = {
  pagedCommunities,
  searchCommunities,
  setCommunity,
  unsetCommunity,
  post,
}

export default schema
