import React from 'react'
import R from 'ramda'

import EmptyMsg from './EmptyMsg'

const NotificationList = ({ data }) => {
  if (R.isEmpty(data)) return <EmptyMsg type="notifications" />

  return <h3>NotificationList</h3>
}

export default NotificationList
