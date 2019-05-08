import React from 'react'
import R from 'ramda'

import EmptyLabel from '@components/EmptyLabel'

const NotificationList = ({ data }) => {
  if (R.isEmpty(data)) return <EmptyLabel text="没有收到关注消息" />

  return <h3>NotificationList</h3>
}

export default NotificationList
