import F from '../fragments'

export const meetup = `
  query meetup($id: ID!, $userHasLogin: Boolean!) {
    meetup(id: $id) {
      ${F.article}
      ${F.articleDetail}
    }
  }
`
export const pagedMeetups = `
  query($filter: PagedMeetupsFilter, $userHasLogin: Boolean!) {
    pagedMeetups(filter: $filter) {
      entries {
        ${F.article}
        ${F.pageArticleMeta}
        linkAddr
        digest
        commentsParticipants {
          ${F.author}
        }
        viewerHasViewed @include(if: $userHasLogin)
        viewerHasUpvoted @include(if: $userHasLogin)
      }
      ${F.pagi}
    }
  }
`
