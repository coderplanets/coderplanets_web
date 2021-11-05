/*
 *
 * AccountEditor
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import SubmitButton from '@/widgets/Buttons/SubmitButton'
import { Divider } from '@/widgets/Common'
import SexInputer from './SexInputer'
import SocialInputer from './SocialInputer'

import type { TStore } from './store'

import {
  Wrapper,
  AvatarPic,
  FormsWrapper,
  Section,
  RowSection,
  LoginSection,
  LoginDesc,
  Label,
  SexLabel,
  Input,
  TextareaInput,
  Footer,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AccountEditor')

type TProps = {
  accountEditor?: TStore
}

const AccountEditorContainer: FC<TProps> = ({ accountEditor: store }) => {
  useInit(store)

  const { editUserData, submitState } = store

  return (
    <Wrapper className="normal-form">
      {editUserData.avatar && <AvatarPic src={editUserData.avatar} />}
      <FormsWrapper>
        <LoginSection>
          <Label>登入名称</Label>
          <LoginDesc>mydearxym</LoginDesc>
        </LoginSection>
        <Section>
          <Label>我的昵称</Label>
          <Input placeholder="// 我的昵称" />
        </Section>

        <Section>
          <Label>一句话介绍</Label>
          <Input placeholder="// 示例：工作@团队" />
        </Section>

        <RowSection>
          <SexLabel>性别</SexLabel>
          <SexInputer value={editUserData.sex} />
        </RowSection>

        <Section>
          <Label>关于我</Label>
          <TextareaInput placeholder="// 更多介绍" behavior="textarea" />
        </Section>
        <Divider top={0} bottom={30} />
        <SocialInputer account={editUserData} />
        <Divider bottom={30} />
        <Footer>
          <SubmitButton
            submitState={submitState}
            okText="更 新"
            onPublish={console.log}
            onCancel={console.log}
            withCancel
          />
        </Footer>
      </FormsWrapper>
    </Wrapper>
  )
}

export default pluggedIn(AccountEditorContainer) as FC<TProps>
