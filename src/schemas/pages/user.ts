import F from '../fragments'

export const user = `
  query user($login: String!, $userHasLogin: Boolean!) {
    user(login: $login) {
      ${F.author}
      views
      sex
      location
      social {
        ${F.userSocial}
      }
      meta {
        isMaker
        publishedPostsCount
        publishedJobsCount
        publishedBlogsCount
        publishedWorksCount
        publishedRadarsCount
        publishedMeetupsCount
      }
      followersCount
      followingsCount
      viewerHasFollowed @include(if: $userHasLogin)
      achievement {
        ${F.achievement}
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

      subscribedCommunitiesCount

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
        social {
          ${F.userSocial}
        }
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
