import { gql } from '@urql/core'

const simpleQuery = gql`
  query($filter: filter!) {
    post(id: $id) {
      id
    }
  }
`

const schema = {
  simpleQuery,
}

export default schema
