import F from '../fragments'

export const blog = `
  query blog($id: ID!, $userHasLogin: Boolean!) {
    blog(id: $id) {
      ${F.article}
      ${F.articleDetail}
      rss
    }
  }
`
export const blogRssInfo = `
  query ($rss: String!) {
    blogRssInfo(rss: $rss) {
      title
      subtitle
      link
      updated
      author {
        name
        intro
        github
        twitter
      }
      historyFeed {
        title
        digest
        linkAddr
        content
        published
        updated
      }
    }
  }
`
export const pagedBlogs = `
  query($filter: PagedBlogsFilter, $userHasLogin: Boolean!) {
    pagedBlogs(filter: $filter) {
      entries {
        ${F.article}
        meta {
          thread
        }
        digest
        linkAddr
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

export const pagedPublishedBlogs = `
  query($login: String!, $filter: PagedFilter!, $userHasLogin: Boolean!) {
    pagedPublishedBlogs(login: $login, filter: $filter) {
      entries {
        ${F.article}
        meta {
          thread
        }
        digest
        linkAddr
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
