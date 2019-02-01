import F from '../fragments'

export const user = `
  query user($login: String!, $userHasLogin: Boolean!) {
    user(login: $login) {
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
        ${F.author}
        geoCity
        bio
        fromGithub
        location
        qq
        weibo
        weichat
        sex
        cmsPassport
        subscribedCommunitiesCount
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
