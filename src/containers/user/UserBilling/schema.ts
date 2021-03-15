import gql from 'graphql-tag'

const simpleMutation = gql`
  mutation($id: ID!) {
    post(id: $id) {
      id
    }
  }
`
const pagedBillRecords = gql`
  query($filter: PagedFilter!) {
    pagedBillRecords(filter: $filter) {
      entries {
        id
        state
        amount
        hashId
        paymentUsage
        paymentMethod
        insertedAt
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  simpleMutation,
  pagedBillRecords,
}

export default schema
