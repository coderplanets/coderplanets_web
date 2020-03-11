import React from 'react'
import R from 'ramda'

import EmptyLabel from '@components/EmptyLabel'

const SysNotificationList = ({ data }) => {
  if (R.isEmpty(data)) return <EmptyLabel text="没有收到系统消息" />

  return <h3>SysNotificationList</h3>
}

export default React.memo(SysNotificationList)
