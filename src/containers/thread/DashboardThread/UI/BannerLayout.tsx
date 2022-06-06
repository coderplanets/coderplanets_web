import { FC, memo, useState } from 'react'

import type { TBannerLayout } from '@/spec'

import { BANNER_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import Button from '@/widgets/Buttons/Button'
import { Br, Space, SpaceGrow } from '@/widgets/Common'
import CheckLabel from '@/widgets/CheckLabel'

import SectionLabel from '../SectionLabel'

import {
  Wrapper,
  SelectWrapper,
  ExampleBtn,
  Layout,
  LayoutTitle,
  DividerLine,
  Block,
  Bar,
  Circle,
  Row,
  Main,
  ListsWrapper,
  TagssWrapper,
} from '../styles/ui/banner_layout'

type TProps = {
  _layout?: TBannerLayout
}

const BannerLayout: FC<TProps> = ({ _layout = BANNER_LAYOUT.HEADER }) => {
  const [layout, setLayout] = useState<TBannerLayout>(BANNER_LAYOUT.HEADER)

  return (
    <Wrapper>
      <SectionLabel
        title="整体布局"
        desc={
          <>
            整体页面的 Header 布局，适用于除文章页的所有页面。
            <ExampleBtn>
              <Button
                onClick={() =>
                  callDashboardDesc(DASHBOARD_DESC_LAYOUT.POST_LIST)
                }
                size="small"
                ghost
                noBorder
              >
                查看示例
              </Button>
            </ExampleBtn>
          </>
        }
      />
      <SelectWrapper>
        <Layout onClick={() => setLayout(BANNER_LAYOUT.HEADER)}>
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
              title="布局 A"
              $active={layout === BANNER_LAYOUT.HEADER}
              top={10}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Space right={40} />
        <Layout onClick={() => setLayout(BANNER_LAYOUT.TABBER)}>
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
              title="布局 B"
              $active={layout === BANNER_LAYOUT.TABBER}
              top={10}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
      </SelectWrapper>
    </Wrapper>
  )
}

export default memo(BannerLayout)
