/*
 *
 * UpgradePackges
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD, EMAIL_BUSINESS, SENIOR_AMOUNT_THRESHOLD } from '../../config'

import { Button, Modal, SectionLabel } from '../../components'
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

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:UpgradePackges')

const freeUserItems = [
  { title: '浏览,发帖,订阅' },
  { title: '点赞,收藏,关注' },
  { title: '发布招聘' },
  { title: '创建专栏(wip)' },
]

const seniorItems = [
  { title: '关闭广告' },
  { title: '主题设置' },
  // { title: '首页发帖' },
  { title: '私有收藏夹' },
  { title: '发起投票(wip)' },
  { title: '匿名发布(wip)' },
  { title: '创建组织(wip)' },
  { title: '文章打赏(wip)' },
  { title: '订阅栏分组(wip)' },
  { title: '运维统计(wip)' },
]

const platinumUserItems = [
  { title: '页脚/边栏 Logo 推广' },
  { title: 'Github 特别鸣谢' },
]

class UpgradePackgesContainer extends React.Component {
  componentDidMount() {
    const { upgradePackges } = this.props
    logic.init(upgradePackges)
  }

  render() {
    const { upgradePackges } = this.props
    const { show } = upgradePackges

    return (
      <Modal width="800px" show={show} showCloseBtn onClose={logic.close}>
        <Wrapper>
          <LabelWrapper>
            <SectionLabel
              title="升级助手"
              iconSrc={`${ICON_CMD}/rocket.svg`}
              desc="特别说明：(wip) 标签表示正在开发中的功能，会在 2-3 个月内逐步完善并可能涨价, 届时已付费的会员无需再次付款。项目早期各方面开销较大，需要资金支持, 谢谢理解。"
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
              <Button type="red" onClick={logic.upgrade}>
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
}

export default inject(storePlug('upgradePackges'))(
  observer(UpgradePackgesContainer)
)
