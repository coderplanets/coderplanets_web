import React from 'react'
import R from 'ramda'

// import { ICON_CMD } from '../../config'
import { HintTitle, IssueLink } from './styles'

const NotFoundMessage = ({ page, target }) => {
  switch (page) {
    case 'user': {
      return (
        <HintTitle>
          未找到该用户
          {!R.isEmpty(target) ? <span>: {target}</span> : null}
        </HintTitle>
      )
    }
    case 'post': {
      return <HintTitle>未找到该帖子</HintTitle>
    }
    case 'job': {
      return <HintTitle>未找到该招聘内容</HintTitle>
    }
    case 'repo': {
      return <HintTitle>未找到该仓库</HintTitle>
    }
    case 'video': {
      return <HintTitle>未找到该视频内容</HintTitle>
    }
    case 'community': {
      return (
        <HintTitle>
          未找到社区
          {!R.isEmpty(target) ? <span>: {target}</span> : null},
          如果你觉得该社区很重要，欢迎
          <IssueLink
            href="https://github.com/coderplanets/coderplanets_web/issues/280"
            rel="noopener noreferrer"
            target="_blank"
          >
            参与创建
          </IssueLink>
          !
        </HintTitle>
      )
    }
    default: {
      return <HintTitle>页面未找到</HintTitle>
    }
  }
}

export default NotFoundMessage
