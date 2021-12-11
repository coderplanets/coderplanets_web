/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'

import type { TWorks } from '@/spec'
import { WORKS_TAB_ITEMS } from '@/constant'
import { buildLog } from '@/utils/logger'

import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import Tabs from '@/widgets/Switcher/Tabs'

import {
  Wrapper,
  WorksWrapper,
  Title,
  Intro,
  Cover,
  Desc,
  TabsWrapper,
} from '../styles/mobile_view/works_layout'
import { worksTabOnChange } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article?: TWorks
  tab: string
}

const WorksLayout: FC<TProps> = ({ article, tab }) => {
  const activeTab = !!tab ? tab : 'story'
  // @ts-ignore
  const tabItems = WORKS_TAB_ITEMS

  return (
    <Wrapper>
      <WorksWrapper>
        <Cover src={article.cover} />
        <Intro>
          <Title>{article.title}</Title>
          <Desc>{article.desc}</Desc>
        </Intro>
      </WorksWrapper>

      <TabsWrapper>
        <Tabs
          items={tabItems}
          size="small"
          activeKey={activeTab}
          bottomSpace={4}
          onChange={worksTabOnChange}
        />
        <ArticleBaseStats article={article} />
      </TabsWrapper>
    </Wrapper>
  )
}

export default WorksLayout
