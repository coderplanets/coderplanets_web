import { FC, memo, useState } from 'react'

import { Br, Space, SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Section,
  SelectWrapper,
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
  testid?: string
}

const PostListLayout: FC<TProps> = ({ testid = 'PostListLayout' }) => {
  const [layout, setLayout] = useState('A')

  return (
    <Wrapper>
      <Section>
        <Title>讨论列表</Title>
        <SelectWrapper>
          <Layout onClick={() => setLayout('A')}>
            <Block $active={layout === 'A'}>
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
            <LayoutTitle $active={layout === 'A'}>布局 A</LayoutTitle>
          </Layout>
          <Space right={40} />
          <Layout onClick={() => setLayout('B')}>
            <Block $active={layout === 'B'}>
              <Row>
                <Column center>
                  <Circle />
                  <Br bottom={8} />
                  <UpvoteIcon size={13} />
                  <Br bottom={5} />
                  <Bar long={50} />
                </Column>

                <Space right={18} />

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
                  <Br bottom={8} />
                  <Bar thin long={80} />
                  <Br bottom={12} />
                  <Row>
                    <Bar long={20} />
                    <Space right={12} />
                    <Bar thin long={20} />
                  </Row>
                </Column>
              </Row>
            </Block>
            <LayoutTitle $active={layout === 'B'}>布局 B</LayoutTitle>
          </Layout>
        </SelectWrapper>
      </Section>
    </Wrapper>
  )
}

export default memo(PostListLayout)
