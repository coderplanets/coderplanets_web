import F from '../fragments'

export const post = `
  query post($id: ID!) {
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
      favoritedCount
      starredCount
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
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
  query($filter: PagedArticleFilter, $userHasLogin: Boolean!) {
    pagedPosts(filter: $filter) {
      entries {
        ${F.post}
        digest
        linkAddr
        copyRight
        commentsCount
        commentsParticipators(filter: { first: 5 }) {
          id
          nickname
          avatar
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
