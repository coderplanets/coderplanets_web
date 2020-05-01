import React from 'react'

import AlertBar from '@components/AlertBar'

const Message = () => (
  <AlertBar>
    <div>
      点击社区可同步该内容到相应的社区，同步后该内容的管理与源社区是独立的，由目标社区管理员管理。
    </div>
  </AlertBar>
)

export default React.memo(Message)
