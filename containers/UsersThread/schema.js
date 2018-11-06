import gql from 'graphql-tag'

const citiesGeoInfo = gql`
  query {
    citiesGeoInfo {
      entries {
        city
        value
        long
        lant
      }
      totalCount
    }
  }
`

const schema = {
  citiesGeoInfo,
}

export default schema
