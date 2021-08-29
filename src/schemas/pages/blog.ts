import F from '../fragments'

export const blog = `
  query blog($id: ID!, $userHasLogin: Boolean!) {
    blog(id: $id) {
      ${F.article}
      body
      linkAddr
      collectsCount
      viewerHasCollected @include(if: $userHasLogin)
      upvotesCount
      viewerHasUpvoted @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
`
export const pagedBlogs = `
  query($filter: PagedBlogsFilter, $userHasLogin: Boolean!) {
    pagedBlogs(filter: $filter) {
      entries {
        ${F.article}
        digest
        linkAddr
        commentsParticipants {
          ${F.author}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
