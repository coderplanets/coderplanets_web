import F from '../fragments'

export const post = `
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.post}
      body
      length
      linkAddr
      copyRight
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
      commentsCount
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
export const pagedPosts = `
  query($filter: PagedPostsFilter, $userHasLogin: Boolean!) {
    pagedPosts(filter: $filter) {
      entries {
        ${F.post}
        isPinned
        digest
        linkAddr
        copyRight
        commentsCount
        commentsParticipants {
          ${F.author}
        }
        articleTags {
          ${F.tag}
        }
        originalCommunity {
          ${F.community}
          subscribersCount
        }
        author {
          ${F.author}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
