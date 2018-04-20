import gql from 'graphql-tag'

const user = gql`
  query user($id: ID!) {
    user(id: $id) {
      nickname
      avatar
      bio
      fromGithub
      contributes {
        date
        count
      }
    }
  }
`

const account = gql`
  query account {
    account {
      contributes {
        records {
          count
          date
        }
        startDate
        endDate
        totalCount
      }
    }
  }
`

const schema = {
  account,
  user,
}

export default schema
