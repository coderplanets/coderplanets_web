import React from 'react'
import { Alert } from 'antd'
import 'antd/lib/alert/style/index.css'

const Message = () => (
  <Alert
    message={
      <div>
        点击社区可同步该内容到相应的社区，同步后该内容的管理与源社区是独立的，由目标社区管理员管理。
      </div>
    }
    type="warning"
  />
)

export default Message
