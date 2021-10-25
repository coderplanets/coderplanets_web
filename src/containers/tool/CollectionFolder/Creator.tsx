import { FC, memo } from 'react'

import { ICON } from '@/config'
import type { TCollectionFolder } from '@/spec'
import { buildLog } from '@/utils/logger'

import Input from '@/widgets/Input'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Button from '@/widgets/Buttons/Button'
import { Br, Space, SpaceGrow } from '@/widgets/Common'
import Folder from '@/widgets/Folder'
import IconText from '@/widgets/IconText'
import Checker from '@/widgets/Checker'

import {
  Wrapper,
  Header,
  InnerWrapper,
  SidebarWrapper,
  TipsText,
  NoteText,
  EditWrapper,
  FormItemWrapper,
  FormLabel,
  FormInput,
  Footer,
} from './styles/editor'

import {
  categoryOnChange,
  privateOnChange,
  onCategoryCreate,
  switchToSetter,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CollectionFolder:Creator')

type TProps = {
  data: TCollectionFolder
  show: boolean
}

const Creator: FC<TProps> = ({ data, show }) => (
  <Wrapper show={show} className="normal-form">
    <Header>创建新收藏夹</Header>
    <InnerWrapper>
      <SidebarWrapper>
        <Folder inactive lock />
        <Br bottom={30} />
        <IconText iconSrc={`${ICON}/route/light.svg`}>Tips</IconText>
        <TipsText>
          你可以将不同板块的内容归类到不同的收藏夹中，方便往后查找。
        </TipsText>
      </SidebarWrapper>
      <EditWrapper>
        <FormItemWrapper>
          <FormLabel>收藏夹标题</FormLabel>
          <FormInput>
            <Input
              placeholder="//必填项"
              value={data.title}
              onChange={categoryOnChange('title')}
            />
          </FormInput>
        </FormItemWrapper>
        <FormItemWrapper>
          <FormLabel>描述信息</FormLabel>
          <FormInput>
            <Input
              value={data.desc}
              onChange={categoryOnChange('desc')}
              placeholder="//可选项"
              behavior="textarea"
            />
          </FormInput>
        </FormItemWrapper>
        <FormItemWrapper>
          <Checker
            checked={false}
            // onChange={privateOnChange}
            // onChange={(checked) => updateWorks('isOSS', checked)}
            size="small"
          >
            上锁
          </Checker>
          {/* <NoteText>
            完全公开，允许互联网上的任何人查看该收藏夹里的内容。
          </NoteText> */}
          <NoteText>不公开，收藏夹里的内容仅自己可见。</NoteText>
        </FormItemWrapper>
        <SpaceGrow />
        <Footer>
          <ArrowButton size="tiny" direction="left" onClick={switchToSetter}>
            上一步
          </ArrowButton>
          <Space right={18} />
          <Button type="primary" onClick={onCategoryCreate} size="small">
            创建
          </Button>
          <Space right={50} />
        </Footer>
      </EditWrapper>
    </InnerWrapper>
  </Wrapper>
)

export default memo(Creator)
