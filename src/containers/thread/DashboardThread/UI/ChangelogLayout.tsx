import { FC, memo } from 'react'

import type { TChangelogLayout } from '@/spec'

import { CHANGELOG_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import { Row, Br, Space, SpaceGrow, Divider, Inline } from '@/widgets/Common'
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
  Block,
  Bar,
  MiniBar,
  MiniItem,
  MiniIntro,
  Cover,
  MiniPic,
  Column,
  UpvoteIcon,
  Picture,
} from '../styles/ui/changelog_layout'

import { edit } from '../logic'

type TProps = {
  layout: TChangelogLayout
  isTouched: boolean
  saving: boolean
}

const ChangelogLayout: FC<TProps> = ({ layout, isTouched, saving }) => {
  return (
    <Wrapper>
      <SectionLabel
        title="更新日志布局"
        desc={
          <>
            「更新日志」列表的展现形式，切换布局不影响已发布内容。
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
        <Layout
          onClick={() => edit(CHANGELOG_LAYOUT.OUTLINE, 'changelogLayout')}
        >
          <Block $active={layout === CHANGELOG_LAYOUT.OUTLINE}>
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
            <Br top={14} />
            <Row>
              <UpvoteIcon size={15} />
              <Space right={5} />
              <Bar long={12} />
              <Space right={15} />
              <Bar long={12} thin />
            </Row>

            <Divider top={30} bottom={30} />

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
          <LayoutTitle $active={layout === CHANGELOG_LAYOUT.OUTLINE}>
            <CheckLabel
              title="折叠历史发布"
              $active={layout === CHANGELOG_LAYOUT.OUTLINE}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Space right={40} />
        <Layout
          onClick={() => edit(CHANGELOG_LAYOUT.PREVIEW, 'changelogLayout')}
        >
          <Block $active={layout === CHANGELOG_LAYOUT.PREVIEW}>
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
          <LayoutTitle $active={layout === CHANGELOG_LAYOUT.PREVIEW}>
            <CheckLabel
              title="全部展开"
              $active={layout === CHANGELOG_LAYOUT.PREVIEW}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
      </SelectWrapper>

      <SavingBar
        isTouched={isTouched}
        field={SETTING_FIELD.CHANGELOG_LAYOUT}
        loading={saving}
        top={20}
      />
    </Wrapper>
  )
}

export default memo(ChangelogLayout)
