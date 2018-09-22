import gql from 'graphql-tag'

const userRaw = `
  query user($id: ID!) {
    user(id: $id) {
      id
      nickname
      avatar
      bio
      sex
      location
      qq
      weibo
      weichat
      github
      zhihu
      douban
      twitter
      facebook
      dribble
      instagram
      pinterest
      huaban
      workBackgrounds {
        company
        title
      }
      educationBackgrounds {
        school
        major
      }
      fromGithub
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
      location
      sex
      qq
      weibo
      weichat
      github
      zhihu
      douban
      twitter
      facebook
      dribble
      instagram
      pinterest
      huaban
      workBackgrounds {
        company
        title
      }
      educationBackgrounds {
        school
        major
      }
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
