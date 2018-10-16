/*
 *
 * UpgradePackges
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

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
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UpgradePackges')
/* eslint-enable no-unused-vars */

const freeUserItems = [
  { title: '浏览,发帖,订阅' },
  { title: '点赞,收藏,关注' },
  { title: '发布招聘,专栏' },
  { title: '设置打赏' },
]

const proUserItems = [
  { title: '关闭广告' },
  { title: '主题设置' },
  { title: '首页发帖' },
  { title: '发起投票' },
  { title: '匿名发布' },
  { title: '创建组织' },
  { title: '侧边栏分组' },
  { title: '私有收藏夹' },
  { title: '付费专栏(免申请)' },
  { title: '社区统计图表' },
]

const platinumUserItems = [
  { title: '页脚 Logo 推广' },
  { title: 'Github 特别鸣谢' },
]

class UpgradePackgesContainer extends React.Component {
  componentWillMount() {
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
              desc="请注意：(wip) 标签表示正在开发中的功能，会在 2-3 个月内逐步完善, 届时会恢复原价, 介意的朋友请慎拍, 谢谢理解。"
            />
          </LabelWrapper>
          <ContentWrapper>
            <Dashboard>
              <PkgTitle>普通用户</PkgTitle>
              <TitleDivider />
              <ItemsWrapper>
                <Support items={freeUserItems} />
                <Support not items={proUserItems} />
                <Support not items={platinumUserItems} />
              </ItemsWrapper>
              <TitleDivider />
              <Button type="primary" ghost>
                免费
              </Button>
            </Dashboard>
            <Dashboard>
              <PkgTitle>高级用户</PkgTitle>
              <TitleDivider />
              <ItemsWrapper>
                <Support items={freeUserItems} />
                <Support items={proUserItems} />
                <Support not items={platinumUserItems} />
              </ItemsWrapper>
              <TitleDivider />
              <Button type="red">￥69 元</Button>
            </Dashboard>
            <Dashboard>
              <PkgTitle>赞助商</PkgTitle>
              <TitleDivider />
              <ItemsWrapper>
                <Support items={freeUserItems} />
                <Support items={proUserItems} />
                <Support items={platinumUserItems} />
              </ItemsWrapper>
              <TitleDivider />
              <Button type="red">￥1999 元</Button>
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
