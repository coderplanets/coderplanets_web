import gql from 'graphql-tag'

const userRaw = `
  query user($id: ID!, $userHasLogin: Boolean!) {
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
      followersCount
      followingsCount

      viewerHasFollowed @include(if: $userHasLogin)

      achievement {
        reputation
        contentsStaredCount
        contentsFavoritedCount
        sourceContribute {
          web
          server
        }
      }
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
      editableCommunities {
        entries {
          id
          logo
          title
          raw
        }
        totalCount
      }
      insertedAt
    }
  }
`

const user = gql`
  ${userRaw}
`
const schema = {
  user,
  userRaw,
}

export default schema
