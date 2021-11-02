import { gql } from '@urql/core'
import { F, P } from '@/schemas'

const getArticleSchema = (thread) => {
  return gql`
    ${P[thread.toLowerCase()]}
  `
}

const setTag = gql`
  ${P.setTag}
`
const unsetTag = gql`
  ${P.unsetTag}
`

const blogRssInfo = gql`
  ${P.blogRssInfo}
`

const schema = {
  setTag,
  unsetTag,
  getArticleSchema,
  blogRssInfo,
  getUpvoteSchema: F.getUpvoteSchema,
  getUndoUpvoteSchema: F.getUndoUpvoteSchema,
}

export default schema
