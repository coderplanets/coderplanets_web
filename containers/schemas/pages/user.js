import F from '../fragments'

export const user = `
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

export const holder = 1
