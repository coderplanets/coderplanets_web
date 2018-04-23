import gql from 'graphql-tag'

const user = gql`
  query user($id: ID!) {
    user(id: $id) {
      nickname
      avatar
      bio
      fromGithub
      company
      education
      location
      qq
      weibo
      weichat
      sex
      githubProfile {
        htmlUrl
        login
      }
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
      company
      education
      location
      qq
      weibo
      weichat
      sex
      githubProfile {
        htmlUrl
        login
      }
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
