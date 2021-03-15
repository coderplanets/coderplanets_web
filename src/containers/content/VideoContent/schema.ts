import gql from 'graphql-tag'
import { P } from '@/schemas'

const video = gql`
  ${P.video}
`
const schema = {
  video,
}

export default schema
