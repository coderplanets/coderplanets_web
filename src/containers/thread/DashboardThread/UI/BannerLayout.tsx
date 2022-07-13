import { FC, memo } from 'react'

import type { TBannerLayout } from '@/spec'

import { BANNER_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import { Row, Br, Space, SpaceGrow, Inline } from '@/widgets/Common'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import CheckLabel from '@/widgets/CheckLabel'

import { SETTING_FIELD } from '../constant'
import SectionLabel from '../SectionLabel'
import SavingBar from '../SavingBar'

import {
  Wrapper,
  SelectWrapper,
  Layout,
  LayoutTitle,
  DividerLine,
  Block,
  Bar,
  Circle,
  Main,
  ListsWrapper,
  TagssWrapper,
} from '../styles/ui/banner_layout'
import { edit } from '../logic'

type TProps = {
  layout: TBannerLayout
  isTouched: boolean
  saving: boolean
}

const BannerLayout: FC<TProps> = ({ layout, isTouched, saving }) => {
  return (
    <Wrapper>
      <SectionLabel
        title="整体布局"
        desc={
          <>
            整体页面的 Header 布局，适用于除文章页的所有页面。
            <Inline>
              <ArrowButton
                onClick={() =>
                  callDashboardDesc(DASHBOARD_DESC_LAYOUT.POST_LIST)
                }
                size="tiny"
                arrowStyle="simple"
              >
                查看示例
              </ArrowButton>
            </Inline>
          </>
        }
      />
      <SelectWrapper>
        <Layout onClick={() => edit(BANNER_LAYOUT.HEADER, 'bannerLayout')}>
          <Block $active={layout === BANNER_LAYOUT.HEADER}>
            <Row>
              <Bar thin long={16} />
              <Space right={42} />
              <Bar thin long={40} />
              <Space right={45} />
              <Bar thin long={6} />
              <Space right={5} />
              <Circle radius={6} />
            </Row>

            <DividerLine top={10} bottom={20} />

            <Main>
              <ListsWrapper>
                <Bar long={60} thin />
                <Br bottom={14} />
                <Bar long={50} thin />
                <Br bottom={14} />
                <Bar long={55} thin />
                <Br bottom={14} />
                <Bar long={40} thin />
                <Br bottom={14} />
                <Bar long={60} thin />
                <Br bottom={14} />
                <Bar long={50} thin />
                <Br bottom={14} />
                <Bar long={55} thin />
              </ListsWrapper>
              <TagssWrapper>
                <Bar long={100} />
                <Br bottom={15} />
                <Bar long={60} thin />
                <Br bottom={6} />
                <Bar long={85} thin />
                <Br bottom={6} />
                <Bar long={50} thin />
                <Br bottom={6} />
                <Bar long={60} thin />
                <Br bottom={6} />
                <Bar long={50} thin />
              </TagssWrapper>
            </Main>
          </Block>
          <LayoutTitle $active={layout === BANNER_LAYOUT.HEADER}>
            <CheckLabel
              title="标题式"
              $active={layout === BANNER_LAYOUT.HEADER}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Space right={40} />
        <Layout onClick={() => edit(BANNER_LAYOUT.TABBER, 'bannerLayout')}>
          <Block $active={layout === BANNER_LAYOUT.TABBER}>
            <Row>
              <Bar long={16} />
              <SpaceGrow />
              <Bar thin long={6} />
              <Space right={5} />
              <Circle radius={6} />
            </Row>

            <Br bottom={16} />
            <Row>
              <Bar thin long={10} />
              <Space right={10} />
              <Bar thin long={10} />
              <Space right={10} />
              <Bar thin long={10} />
              <Space right={10} />
              <Bar thin long={10} />
            </Row>
            <DividerLine top={5} bottom={20} />

            <Main>
              <ListsWrapper>
                <Bar long={60} thin />
                <Br bottom={14} />
                <Bar long={50} thin />
                <Br bottom={14} />
                <Bar long={55} thin />
                <Br bottom={14} />
                <Bar long={40} thin />
                <Br bottom={14} />
                <Bar long={60} thin />
                <Br bottom={14} />
                <Bar long={50} thin />
              </ListsWrapper>
              <TagssWrapper>
                <Bar long={100} />
                <Br bottom={15} />
                <Bar long={60} thin />
                <Br bottom={6} />
                <Bar long={85} thin />
                <Br bottom={6} />
                <Bar long={50} thin />
                <Br bottom={6} />
                <Bar long={60} thin />
                <Br bottom={6} />
                <Bar long={50} thin />
              </TagssWrapper>
            </Main>
          </Block>
          <LayoutTitle $active={layout === BANNER_LAYOUT.TABBER}>
            <CheckLabel
              title="标签卡式"
              $active={layout === BANNER_LAYOUT.TABBER}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
      </SelectWrapper>
      <SavingBar
        isTouched={isTouched}
        field={SETTING_FIELD.BANNER_LAYOUT}
        loading={saving}
        top={20}
      />
    </Wrapper>
  )
}

export default memo(BannerLayout)
