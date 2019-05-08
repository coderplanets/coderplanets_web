import gql from 'graphql-tag'
import { P } from '@schemas'

const post = gql`
  ${P.post}
`
const schema = {
  post,
}

export default schema
