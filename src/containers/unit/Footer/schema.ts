import { gql } from '@urql/core'

const onlineStatus = gql`
  query ($freshkey: String) {
    onlineStatus(freshkey: $freshkey) {
      realtimeVisitors
    }
  }
`

const schema = {
  onlineStatus,
}

export default schema
