import React from 'react'
import { isEmpty } from 'ramda'

import EmptyLabel from '@/components/EmptyLabel'

const SysNotificationList = ({ data }) => {
  if (isEmpty(data)) return <EmptyLabel text="没有收到系统消息" />

  return <h3>SysNotificationList</h3>
}

export default React.memo(SysNotificationList)
