import gql from 'graphql-tag'

const comments = gql`
  query comments($id: ID!, $filter: PagedFilter!) {
    comments(id: $id, filter: $filter) {
      entries {
        id
        body
        author {
          id
          nickname
          avatar
        }
        replyTo {
          id
          body
        }
        repliesCount
        likesCount
        dislikesCount
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`

export const holder = 1

const schema = {
  comments,
}

export default schema
