import gql from 'graphql-tag'
import { F } from '../schemas'

const userRaw = `
  query user($id: ID!, $userHasLogin: Boolean!) {
    user(id: $id) {
      ${F.author}
      views
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
          ${F.community}
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
