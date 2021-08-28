import F from '../fragments'

export const radar = `
  query radar($id: ID!, $userHasLogin: Boolean!) {
    radar(id: $id) {
      ${F.article}
      body
      length
      collectsCount
      viewerHasCollected @include(if: $userHasLogin)
      upvotesCount
      viewerHasUpvoted @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
    }
  }
`
export const pagedRadars = `
  query($filter: PagedRadarsFilter, $userHasLogin: Boolean!) {
    pagedRadars(filter: $filter) {
      entries {
        ${F.article}
        digest
        commentsParticipants {
          ${F.author}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
