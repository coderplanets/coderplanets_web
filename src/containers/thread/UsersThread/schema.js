import gql from 'graphql-tag'

const communityGeoInfo = gql`
  query($id: ID) {
    communityGeoInfo(id: $id) {
      city
      long
      lant
      value
    }
  }
`

const schema = {
  communityGeoInfo,
}

export default schema
