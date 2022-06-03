import { FC, memo, useState } from 'react'

import type { TPostLayout } from '@/spec'

import { POST_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import Button from '@/widgets/Buttons/Button'
import { Br, Space, SpaceGrow } from '@/widgets/Common'
import CheckLabel from '@/widgets/CheckLabel'

import {
  Wrapper,
  Section,
  SelectWrapper,
  ExampleBtn,
  Title,
  Layout,
  LayoutTitle,
  Block,
  Bar,
  Circle,
  Row,
  Column,
  UpvoteIcon,
  CommentIcon,
} from '../styles/ui/post_list_layout'

type TProps = {
  _layout?: TPostLayout
}

const PostListLayout: FC<TProps> = ({ _layout = POST_LAYOUT.UPVOTE_FIRST }) => {
  const [layout, setLayout] = useState<TPostLayout>(POST_LAYOUT.UPVOTE_FIRST)

  return (
    <Wrapper>
      <Section>
        <Row>
          <Title>讨论列表</Title>
          <SpaceGrow />
          <ExampleBtn>
            <Button
              size="tiny"
              ghost
              noBorder
              onClick={() => callDashboardDesc()}
            >
              查看示例
            </Button>
          </ExampleBtn>
        </Row>
        <SelectWrapper>
          <Layout onClick={() => setLayout(POST_LAYOUT.UPVOTE_FIRST)}>
            <Block $active={layout === POST_LAYOUT.UPVOTE_FIRST}>
              <Bar thin long={30} />
              <Br bottom={7} />
              <Row>
                <Bar long={60} />
                <Space right={5} />
                <Bar thin long={8} />
                <SpaceGrow />
                <CommentIcon />
              </Row>
              <Br bottom={10} />

              <Bar long={80} thin />
              <Br bottom={10} />
              <Row>
                <UpvoteIcon size={15} />
                <Space right={5} />
                <Bar long={12} />
                <Space right={15} />
                <Bar long={12} thin />
              </Row>
            </Block>
            <LayoutTitle $active={layout === POST_LAYOUT.UPVOTE_FIRST}>
              <CheckLabel
                title="布局 A"
                $active={layout === POST_LAYOUT.UPVOTE_FIRST}
                top={10}
                left={-15}
              />
            </LayoutTitle>
          </Layout>
          <Space right={40} />
          <Layout onClick={() => setLayout(POST_LAYOUT.COMMENT_FIRST)}>
            <Block $active={layout === POST_LAYOUT.COMMENT_FIRST}>
              <Row>
                <Column center>
                  <Circle />
                  <Br bottom={8} />
                  <UpvoteIcon size={13} />
                  <Br bottom={3} />
                  <Bar long={50} />
                </Column>

                <Space right={12} />

                <Column grow>
                  <Row>
                    <Bar long={50} />
                    <Space right={5} />
                    <Bar thin long={8} />
                    <SpaceGrow />
                    <Bar long={20} />
                  </Row>
                  <Br bottom={8} />
                  <Bar thin long={20} />
                  <Br bottom={11} />
                  <Bar thin long={80} />
                  <Br bottom={10} />
                  <Row>
                    <Bar long={20} />
                    <Space right={12} />
                    <Bar thin long={20} />
                  </Row>
                </Column>
              </Row>
            </Block>
            <LayoutTitle $active={layout === POST_LAYOUT.COMMENT_FIRST}>
              <CheckLabel
                title="布局 B"
                $active={layout === POST_LAYOUT.COMMENT_FIRST}
                top={10}
                left={-15}
              />
            </LayoutTitle>
          </Layout>
        </SelectWrapper>
      </Section>
    </Wrapper>
  )
}

export default memo(PostListLayout)
