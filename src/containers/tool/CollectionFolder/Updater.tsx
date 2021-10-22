import { FC, memo } from 'react'

import { ICON } from '@/config'
import type { TCollectionFolder } from '@/spec'
import { buildLog } from '@/utils/logger'

import Input from '@/widgets/Input'
import Button from '@/widgets/Buttons/Button'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import { Br, Space, SpaceGrow } from '@/widgets/Common'
import Folder from '@/widgets/Folder'
import IconText from '@/widgets/IconText'
import Checker from '@/widgets/Checker'
import Tooltip from '@/widgets/Tooltip'

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
const log = buildLog('C:CollectionFolder:Updater')

type TProps = {
  data: TCollectionFolder
  show: boolean
}

const Updater: FC<TProps> = ({ data, show }) => (
  <Wrapper show={show} className="normal-form">
    <Header>编辑收藏夹</Header>
    <InnerWrapper>
      <SidebarWrapper>
        <Folder inactive lock />
        <Br bottom={30} />
        <IconText iconSrc={`${ICON}/route/light.svg`}>说明</IconText>
        <TipsText>编辑仅会影响收藏夹封面，已收藏内容不受影响。</TipsText>
        <SpaceGrow />
        <Br bottom={42} />

        <Tooltip
          trigger="click"
          content="删除后收藏夹内的内容将全部丢失，确定继续？"
          behavior="delete-confirm"
        >
          <Button type="red" size="small" ghost>
            删除收藏夹
          </Button>
        </Tooltip>
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
            更新
          </Button>
          <Space right={50} />
        </Footer>
      </EditWrapper>
    </InnerWrapper>
  </Wrapper>
)

export default memo(Updater)
