import React from 'react'
import { isEmpty } from 'ramda'

import EmptyLabel from '@/widgets/EmptyLabel'

const NotificationList = ({ data }) => {
  if (isEmpty(data)) return <EmptyLabel text="没有收到关注消息" />

  return <h3>NotificationList</h3>
}

export default React.memo(NotificationList)
