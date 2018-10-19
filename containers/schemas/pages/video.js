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
  query($filter: PagedArticleFilter) {
    pagedVideos(filter: $filter) {
      entries {
       ${F.video}
        author {
          ${F.author}
        }
      }
      ${F.pagedCounts}
    }
  }
`
