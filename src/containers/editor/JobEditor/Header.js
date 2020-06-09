import React from 'react'
import { isEmpty } from 'ramda'

import AvatarsRow from '@/components/AvatarsRow'
import { ICON_CMD } from '@/config'

import {
  Wrapper,
  UsageText,
  RefUsersWrapper,
  AtSignIcon,
  RefUserList,
  MarkdownIcon,
  MarkDownHint,
  BackToEditHint,
} from './styles/header'

import { changeView } from './logic'

const DoingText = ({ isEdit }) => {
  return isEdit ? (
    <React.Fragment>更新</React.Fragment>
  ) : (
    <React.Fragment>发布</React.Fragment>
  )
}

const Header = ({ isEdit, curView, referUsers }) => {
  switch (curView) {
    case 'MARKDOWN_HELP_VIEW': {
      return (
        <Wrapper>
          <UsageText>Github Flavor Markdown</UsageText>
          <BackToEditHint onClick={() => changeView('CREATE_VIEW')}>
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
            工作
            {!isEmpty(referUsers) && (
              <RefUsersWrapper>
                <AtSignIcon src={`${ICON_CMD}/typewriter_mention.svg`} />
                <RefUserList>
                  <AvatarsRow
                    users={referUsers}
                    total={referUsers.length}
                    height="20px"
                    limit={12}
                  />
                </RefUserList>
              </RefUsersWrapper>
            )}
          </UsageText>
          <MarkDownHint onClick={() => changeView('MARKDOWN_HELP_VIEW')}>
            <MarkdownIcon src={`${ICON_CMD}/markdown.svg`} />
            markdown 语法速查
          </MarkDownHint>
        </Wrapper>
      )
  }
}

export default React.memo(Header)
