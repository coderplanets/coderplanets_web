import F from '../fragments'

export const repo = `
  query($id: ID!) {
    repo(id: $id) {
      ${F.article}
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
      collectsCount
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
      articleTags {
        ${F.tag}
      }
    }
  }
`

export const pagedRepos = `
  query($filter: PagedReposFilter, $userHasLogin: Boolean!) {
    pagedRepos(filter: $filter) {
      entries {
        ${F.article}
        isPinned
        views
        releaseTag
        author {
          ${F.author}
        }
        articleTags {
          ${F.tag}
        }
        viewerHasViewed @include(if: $userHasLogin)
        viewerHasUpvoted @include(if: $userHasLogin)
      }
      ${F.pagi}
    }
  }
`
