import F from '../fragments'

export const post = `
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.post}
      body
      length
      linkAddr
      linkIcon
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
      favoritedCount
      viewerHasFavorited @include(if: $userHasLogin)
      starredCount
      viewerHasStarred @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
      origialCommunity {
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
export const pagedPosts = `
  query($filter: PagedPostsFilter, $userHasLogin: Boolean!) {
    pagedPosts(filter: $filter) {
      entries {
        ${F.post}
        pin
        digest
        linkAddr
        linkIcon
        copyRight
        commentsCount
        commentsParticipators(filter: { first: 5 }) {
          ${F.author}
        }
        tags {
          ${F.tag}
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
