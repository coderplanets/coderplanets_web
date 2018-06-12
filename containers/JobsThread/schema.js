import gql from 'graphql-tag'

const pagedJobsRaw = `
  query pagedJobs($filter: PagedArticleFilter) {
    pagedJobs(filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
const partialTagsRaw = `
  query($communityId: ID!, $thread: CmsThread!) {
    partialTags(communityId: $communityId, thread: $thread) {
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
