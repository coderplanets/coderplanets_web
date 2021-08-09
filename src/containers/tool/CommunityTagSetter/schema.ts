import { gql } from '@urql/core'

const simpleMutation = gql`
  mutation($id: ID!) {
    post(id: $id) {
      id
    }
  }
`
const simpleQuery = gql`
  query($filter: filter!) {
    post(id: $id) {
      id
    }
  }
`

const schema = {
  simpleMutation,
  simpleQuery,
}

export default schema
