import gql from 'graphql-tag'

const communities = gql`
  query communities($filter: PagedFilter!) {
    communities(filter: $filter) {
      entries {
        title
        desc
        raw
        logo
      }
    }
  }
`

const schema = {
  communities,
}

export default schema
