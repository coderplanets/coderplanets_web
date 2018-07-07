import gql from 'graphql-tag'

const userRaw = `
  query user($id: ID!) {
    user(id: $id) {
      id
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

const user = gql`
  ${userRaw}
`
// TODO: use user schema
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
  userRaw,
}

export default schema
