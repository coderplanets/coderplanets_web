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
        ${F.achievement}
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

export const sessionState = `
  query {
    sessionState {
      isValid
      user {
        id
        geoCity
        nickname
        avatar
        bio
        fromGithub
        location
        qq
        weibo
        weichat
        sex
        cmsPassport
        customization {
          ${F.c11n}
        }
        githubProfile {
          htmlUrl
          login
        }
        achievement {
          ${F.achievement}
        }
      }
    }
  }
`
