/*
 *
 * AuthorInfo
 *
 */

import { FC, memo, useState, useCallback } from 'react'

import type { TAccount } from '@/spec'
import { SVG } from '@/constant'
import { buildLog } from '@/utils/logger'

import Tabs from '@/widgets/Switcher/Tabs'
import IconButton from '@/widgets/Buttons/IconButton'
import MenuButton from '@/widgets/Buttons/MenuButton'

import AuthorInfo from './AuthorInfo'
import ActivityInfo from './ActivityInfo'
import ReferenceInfo from './ReferenceInfo'

import {
  Wrapper,
  TabsWrapper,
  ReportWrapper,
  ContentWrapper,
} from '../styles/panel'

// import { onFollow, undoFollow } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('w:AuthorInfo:index')

type TProps = {
  testid?: string
  author: TAccount
}

export const TAB_ITEMS = [
  {
    title: '帖作者',
    raw: 'author-info',
  },
  {
    title: '日志',
    raw: 'activity-info',
  },
  {
    title: '引用',
    raw: 'reference-info',
  },
]

const menuOptions = [
  {
    key: 'report',
    icon: SVG.REPORT,
    title: '举报内容',
  },
]

const Panel: FC<TProps> = ({ testid = 'author-info', author }) => {
  const [tab, setTab] = useState('author-info')

  const handleMenu = useCallback((key) => setTab(key), [])

  return (
    <Wrapper testid={testid}>
      <TabsWrapper>
        <Tabs
          items={TAB_ITEMS}
          size="small"
          activeKey={tab}
          bottomSpace={5}
          onChange={(tab) => setTab(tab)}
        />
      </TabsWrapper>
      <ReportWrapper>
        <MenuButton options={menuOptions} onClick={(key) => handleMenu(key)}>
          <IconButton icon={SVG.MOREL_DOT} size={15} dimWhenIdle />
        </MenuButton>
      </ReportWrapper>
      <ContentWrapper>
        {tab === 'author-info' && <AuthorInfo author={author} />}
        {tab === 'activity-info' && <ActivityInfo />}
        {tab === 'reference-info' && <ReferenceInfo />}
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(Panel)
