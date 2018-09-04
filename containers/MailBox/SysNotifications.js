import React from 'react'
import R from 'ramda'

import EmptyMsg from './EmptyMsg'

const SysNotificationList = ({ data }) => {
  console.log('data: ', R.isEmpty(data))
  if (R.isEmpty(data)) return <EmptyMsg type="sys_notifications" />

  return <h3>SysNotificationList</h3>
}

export default SysNotificationList
