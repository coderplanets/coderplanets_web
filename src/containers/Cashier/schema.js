import gql from 'graphql-tag'

const createBill = gql`
  mutation(
    $paymentMethod: PaymentMethodEnum!
    $paymentUsage: PaymentUsageEnum!
    $amount: Float!
    $note: String
  ) {
    createBill(
      paymentMethod: $paymentMethod
      paymentUsage: $paymentUsage
      amount: $amount
      note: $note
    ) {
      id
      state
      amount
      hashId
      paymentUsage
      paymentMethod
      note
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
        note
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`
const schema = {
  createBill,
  pagedBillRecords,
}

export default schema
