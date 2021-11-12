import F from '../fragments'

export const works = `
  query works($id: ID!, $userHasLogin: Boolean!) {
    works(id: $id) {
      ${F.article}
      ${F.articleDetail}
      cover
      desc
      homeLink
      profitMode
      workingMode
      teammates {
        ${F.author}
      }
      techstacks {
        raw
        logo
        title
        category
      }
      socialInfo {
        platform
        link
      }
      cities {
        title
        raw
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
        cover
        desc
        homeLink
        techstacks {
          raw
          logo
          title
        }
        socialInfo {
          platform
          link
        }
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
