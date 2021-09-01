import F from '../fragments'

export const works = `
  query works($id: ID!, $userHasLogin: Boolean!) {
    works(id: $id) {
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
export const pagedWorks = `
  query($filter: PagedWorksFilter, $userHasLogin: Boolean!) {
    pagedWorks(filter: $filter) {
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
