import { gql } from '@urql/core'
import { P } from '@/schemas'

const onlineStatus = gql`
  query ($freshkey: String) {
    onlineStatus(freshkey: $freshkey) {
      realtimeVisitors
    }
  }
`

const sessionState = gql`
  ${P.sessionState}
`

const schema = {
  onlineStatus,
  sessionState,
}

export default schema
