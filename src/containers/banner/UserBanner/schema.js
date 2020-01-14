import gql from 'graphql-tag'
import { P } from '@schemas'

const schema = {
  user: gql`
    ${P.user}
  `,
}

export default schema
