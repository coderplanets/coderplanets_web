import { FC, memo, useState } from 'react'

import type { TChangelogLayout } from '@/spec'

import { CHANGELOG_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import Button from '@/widgets/Buttons/Button'
import { Br, Space, SpaceGrow, Divider } from '@/widgets/Common'
import CheckLabel from '@/widgets/CheckLabel'

import SectionLabel from '../SectionLabel'

import {
  Wrapper,
  SelectWrapper,
  ExampleBtn,
  Layout,
  LayoutTitle,
  Block,
  Bar,
  MiniBar,
  MiniItem,
  MiniIntro,
  Cover,
  MiniPic,
  Row,
  Column,
  UpvoteIcon,
  Picture,
} from '../styles/ui/changelog_layout'

type TProps = {
  _layout?: TChangelogLayout
}

const ChangelogLayout: FC<TProps> = ({ _layout = CHANGELOG_LAYOUT.FOLD }) => {
  const [layout, setLayout] = useState<TChangelogLayout>(CHANGELOG_LAYOUT.FOLD)

  return (
    <Wrapper>
      <SectionLabel
        title="更新日志布局"
        desc={
          <>
            更新日志展现形式，可根据社区内容及团队理解选择合适的展现形式。
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
        <Layout onClick={() => setLayout(CHANGELOG_LAYOUT.FOLD)}>
          <Block $active={layout === CHANGELOG_LAYOUT.FOLD}>
            <Column>
              <Picture />
              <Br top={14} />
              <Row>
                <Bar long={60} />
                <Space right={10} />
                <Bar thin long={10} />
              </Row>
              <Br top={10} />
              <Row>
                <Bar thin long={20} />
                <SpaceGrow />
                <Bar thin long={10} />
              </Row>
            </Column>
            <Br bottom={15} />
            <Bar long={80} thin />
            <Br top={10} />
            <Bar long={30} thin />
            <Br top={10} />
            <Bar long={60} thin />
            <Br top={15} />
            <Row>
              <UpvoteIcon size={15} />
              <Space right={5} />
              <Bar long={12} />
              <Space right={15} />
              <Bar long={12} thin />
            </Row>

            <Divider />

            <MiniItem>
              <Cover>
                <MiniPic />
                <Br top={4} />
                <MiniBar thin long={80} />
                <Br top={2} />
                <MiniBar thin long={80} />
                <Br top={2} />
              </Cover>
              <MiniIntro>
                <Row>
                  <MiniBar long={46} />
                  <Space right={5} />
                  <MiniBar thin long={8} />
                  <SpaceGrow />
                  <MiniBar thin long={10} />
                </Row>
                <Br top={8} />
                <MiniBar thin long={70} />
              </MiniIntro>
            </MiniItem>
            <Br top={12} />
            <MiniItem>
              <Cover>
                <MiniPic />
                <Br top={4} />
                <MiniBar thin long={80} />
                <Br top={2} />
                <MiniBar thin long={80} />
                <Br top={2} />
              </Cover>
              <MiniIntro>
                <Row>
                  <MiniBar long={32} />
                  <Space right={5} />
                  <MiniBar thin long={8} />
                  <SpaceGrow />
                  <MiniBar thin long={10} />
                </Row>
                <Br top={8} />
                <MiniBar thin long={70} />
              </MiniIntro>
            </MiniItem>

            <Br top={12} />
            <MiniItem>
              <Cover>
                <MiniPic />
                <Br top={4} />
                <MiniBar thin long={80} />
                <Br top={2} />
                <MiniBar thin long={80} />
                <Br top={2} />
              </Cover>
              <MiniIntro>
                <Row>
                  <MiniBar long={62} />
                  <Space right={5} />
                  <MiniBar thin long={8} />
                  <SpaceGrow />
                  <MiniBar thin long={10} />
                </Row>
                <Br top={8} />
                <MiniBar thin long={70} />
              </MiniIntro>
            </MiniItem>
          </Block>
          <LayoutTitle $active={layout === CHANGELOG_LAYOUT.FOLD}>
            <CheckLabel
              title="布局 A"
              $active={layout === CHANGELOG_LAYOUT.FOLD}
              top={10}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Space right={40} />
        <Layout onClick={() => setLayout(CHANGELOG_LAYOUT.NORMAL)}>
          <Block $active={layout === CHANGELOG_LAYOUT.NORMAL}>
            <Column>
              <Picture small />
              <Br top={14} />
              <Row>
                <Bar long={60} />
                <Space right={10} />
                <Bar thin long={10} />
              </Row>
              <Br top={10} />
              <Row>
                <Bar thin long={20} />
                <SpaceGrow />
                <Bar thin long={10} />
              </Row>
            </Column>
            <Br bottom={15} />
            <Bar long={80} thin />
            <Br top={10} />
            <Bar long={30} thin />
            <Br top={10} />
            <Row>
              <UpvoteIcon size={15} />
              <Space right={5} />
              <Bar long={12} />
              <Space right={15} />
              <Bar long={12} thin />
            </Row>
            <Divider />
            <Column>
              <Picture small />
              <Br top={14} />
              <Row>
                <Bar long={60} />
                <Space right={10} />
                <Bar thin long={10} />
              </Row>
              <Br top={10} />
              <Row>
                <Bar thin long={20} />
                <SpaceGrow />
                <Bar thin long={10} />
              </Row>
            </Column>
            <Br bottom={15} />
            <Bar long={80} thin />
            <Br top={10} />
            <Bar long={30} thin />
            <Br top={10} />
            <Row>
              <UpvoteIcon size={15} />
              <Space right={5} />
              <Bar long={12} />
              <Space right={15} />
              <Bar long={12} thin />
            </Row>
          </Block>
          <LayoutTitle $active={layout === CHANGELOG_LAYOUT.NORMAL}>
            <CheckLabel
              title="布局 B"
              $active={layout === CHANGELOG_LAYOUT.NORMAL}
              top={10}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
      </SelectWrapper>
    </Wrapper>
  )
}

export default memo(ChangelogLayout)
