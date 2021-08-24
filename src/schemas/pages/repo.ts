import F from '../fragments'

export const repo = `
  query($id: ID!) {
    repo(id: $id) {
      ${F.repo}
      readme
      author {
        ${F.author}
        bio
        location
        achievement {
          reputation
        }
        followersCount
        followingsCount
      }
      lastSync
      favoritedCount
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
      originalCommunity {
        ${F.community}
      }
      communities {
        ${F.community}
      }
      tags {
        ${F.tag}
      }
    }
  }
`

export const pagedRepos = `
  query($filter: PagedReposFilter, $userHasLogin: Boolean!) {
    pagedRepos(filter: $filter) {
      entries {
        ${F.repo}
        pin
        views
        releaseTag
        author {
          ${F.author}
        }
        tags {
          ${F.tag}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
