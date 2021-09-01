import F from '../fragments'

export const meetup = `
  query meetup($id: ID!, $userHasLogin: Boolean!) {
    meetup(id: $id) {
      ${F.article}
      body
      linkAddr
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
export const pagedMeetups = `
  query($filter: PagedMeetupsFilter, $userHasLogin: Boolean!) {
    pagedMeetups(filter: $filter) {
      entries {
        ${F.article}
        ${F.pageArticleMeta}
        upvotesCount
        linkAddr
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
