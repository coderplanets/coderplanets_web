import { gql } from '@urql/core'
import { P } from '@/schemas'

import { titleCase, plural } from '@/utils/helper'

const getPagedPublishedArticlesSchema = (thread) => {
  return gql`
    ${P[`pagedPublished${plural(titleCase(thread))}`]}
  `
}

const follow = gql`
  ${P.follow}
`

const undoFollow = gql`
  ${P.undoFollow}
`

const user = gql`
  query user($login: String) {
    user(login: $login) {
      viewerHasFollowed
    }
  }
`

const schema = {
  getPagedPublishedArticlesSchema,
  follow,
  undoFollow,
  user,
}

export default schema
