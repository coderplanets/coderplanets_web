import gql from 'graphql-tag'

const mentions = gql`
  query($filter: MessagesFilter!) {
    mentions(filter: $filter) {
      entries {
        id
        fromUser {
          id
          avatar
          nickname
        }
        sourceTitle
        sourcePreview
        sourceType
        read
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`
const mailBoxStatus = gql`
  query {
    user {
      id
      mailBox {
        hasMail
        totalCount
        mentionCount
        notificationCount
      }
    }
  }
`
const schema = {
  mailBoxStatus,
  mentions,
}

export default schema
