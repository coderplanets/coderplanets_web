import gql from 'graphql-tag'

const pagedJobsRaw = `
  query pagedJobs($filter: PagedArticleFilter) {
    pagedJobs(filter: $filter) {
      entries {
        id
        title
        digest
        tags {
          id
          title
          color
        }
        author {
          id
          nickname
          avatar
        }
        views
        insertedAt
        updatedAt
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
const partialTagsRaw = `
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(communityId: $communityId, community: $community, thread: $thread) {
      id
      title
      color
      thread
    }
  }
`

const pagedJobs = gql`
  ${pagedJobsRaw}
`
const partialTags = gql`
  ${partialTagsRaw}
`

const schema = {
  pagedJobs,
  pagedJobsRaw,
  partialTags,
  partialTagsRaw,
}

export default schema
