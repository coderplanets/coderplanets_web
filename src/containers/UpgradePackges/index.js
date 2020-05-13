/*
 *
 * UpgradePackges
 *
 */

import React from 'react'

import { ICON_CMD, EMAIL_BUSINESS, SENIOR_AMOUNT_THRESHOLD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import { Button } from '@/components/Buttons'
import Modal from '@/components/Modal'
import SectionLabel from '@/components/SectionLabel'
import Support from './Support'

import {
  Wrapper,
  LabelWrapper,
  ContentWrapper,
  Dashboard,
  PkgTitle,
  TitleDivider,
  ItemsWrapper,
} from './styles'

import { useInit, onClose, onUpgrade } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UpgradePackges')

const freeUserItems = [
  { title: '发布各种内容' },
  { title: '点赞,收藏,关注' },
  { title: '主题设置' },
  { title: '创建专栏(wip)' },
]

const seniorItems = [
  /* { title: '关闭广告' }, */
  // { title: '首页发帖' },
  { title: '私有收藏夹' },
  { title: '发起投票(wip)' },
  { title: '匿名发布(wip)' },
  { title: '创建组织(wip)' },
  { title: '文章打赏(wip)' },
  { title: '订阅栏分组(wip)' },
  /* { title: '运维统计(wip)' }, */
]

const platinumUserItems = [
  { title: '页脚/边栏 Logo 推广' },
  { title: 'Github 特别鸣谢' },
]

const UpgradePackgesContainer = ({ upgradePackges }) => {
  useInit(upgradePackges)

  const { show } = upgradePackges

  return (
    <Modal width="800px" show={show} showCloseBtn onClose={onClose}>
      <Wrapper>
        <LabelWrapper>
          <SectionLabel
            title="升级助手"
            iconSrc={`${ICON_CMD}/rocket.svg`}
            desc="特别说明：(wip) 标签表示正在开发中的功能，会在 2-3 个月内逐步完善并可能涨价, 届时已付费的会员无需再次付款。开源项目需要付出巨大的物质和时间成本, 谢谢理解。"
          />
        </LabelWrapper>
        <ContentWrapper>
          <Dashboard>
            <PkgTitle>普通用户</PkgTitle>
            <TitleDivider />
            <ItemsWrapper>
              <Support items={freeUserItems} />
              <Support not items={seniorItems} />
              <Support not items={platinumUserItems} />
            </ItemsWrapper>
            <TitleDivider />
            <Button type="primary" ghost>
              免费
            </Button>
          </Dashboard>
          <Dashboard>
            <PkgTitle>CPS会员</PkgTitle>
            <TitleDivider />
            <ItemsWrapper>
              <Support items={freeUserItems} />
              <Support items={seniorItems} />
              <Support not items={platinumUserItems} />
            </ItemsWrapper>
            <TitleDivider />
            <Button type="red" onClick={onUpgrade}>
              ￥{SENIOR_AMOUNT_THRESHOLD} 元
            </Button>
          </Dashboard>
          <Dashboard>
            <PkgTitle>赞助商</PkgTitle>
            <TitleDivider />
            <ItemsWrapper>
              <Support items={freeUserItems} />
              <Support items={seniorItems} />
              <Support items={platinumUserItems} />
            </ItemsWrapper>
            <TitleDivider />
            <a href={`mailto:${EMAIL_BUSINESS}`}>
              <Button type="red">邮件咨询</Button>
            </a>
          </Dashboard>
        </ContentWrapper>
      </Wrapper>
    </Modal>
  )
}

export default connectStore(UpgradePackgesContainer)
