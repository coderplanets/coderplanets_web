import F from '../fragments'

export const video = `
  query($id: ID!) {
    video(id: $id) {
      ${F.video}
      link
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
export const pagedVideos = `
  query($filter: PagedVideosFilter, $userHasLogin: Boolean!) {
    pagedVideos(filter: $filter) {
      entries {
       ${F.video}
        pin
        author {
          ${F.author}
        }
        tags {
          ${F.tag}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
