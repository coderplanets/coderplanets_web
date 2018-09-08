import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  UsageText,
  MarkdownIcon,
  MarkDownHint,
  BackToEditHint,
} from './styles/header'

import { THREAD } from '../../utils'
import * as logic from './logic'

const DoingText = ({ isEdit }) => {
  return isEdit ? (
    <React.Fragment>更新</React.Fragment>
  ) : (
    <React.Fragment>发布</React.Fragment>
  )
}
const ThreadText = ({ thread }) => {
  switch (thread) {
    case THREAD.JOB: {
      return '工作'
    }

    default: {
      return '帖子'
    }
  }
}

const Header = ({ isEdit, curView, thread }) => {
  switch (curView) {
    case 'MARKDOWN_HELP_VIEW': {
      return (
        <Wrapper>
          <UsageText>Github Flavor Markdown</UsageText>
          <BackToEditHint onClick={logic.changeView.bind(this, 'CREATE_VIEW')}>
            <MarkdownIcon src={`${ICON_CMD}/original.svg`} />
            返回编辑
          </BackToEditHint>
        </Wrapper>
      )
    }
    default:
      return (
        <Wrapper>
          <UsageText>
            <DoingText isEdit={isEdit} />
            <ThreadText thread={thread} />
          </UsageText>
          <MarkDownHint
            onClick={logic.changeView.bind(this, 'MARKDOWN_HELP_VIEW')}
          >
            <MarkdownIcon src={`${ICON_CMD}/markdown.svg`} />
            markdown 语法速查
          </MarkDownHint>
        </Wrapper>
      )
  }
}

export default Header
