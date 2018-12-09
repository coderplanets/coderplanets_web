import gql from 'graphql-tag'

const createBill = gql`
  mutation(
    $paymentMethod: PaymentMethodEnum!
    $paymentUsage: PaymentUsageEnum!
    $amount: Float!
  ) {
    createBill(
      paymentMethod: $paymentMethod
      paymentUsage: $paymentUsage
      amount: $amount
    ) {
      id
      state
      amount
      hashId
      paymentUsage
      paymentMethod
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
