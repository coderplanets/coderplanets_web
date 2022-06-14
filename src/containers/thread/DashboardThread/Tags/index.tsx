import { FC, memo } from 'react'

import { COLORS } from '@/constant'

import Portal from '../Portal'

import ThreadSelector from './ThreadSelector'
import CategorySelector from './CategorySelector'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  LabelBlock,
  Dot,
  LabelTitle,
} from '../styles/tags'

type TProps = {
  testid?: string
}

const Tags: FC<TProps> = ({ testid = 'tags' }) => {
  return (
    <Wrapper>
      <Portal
        title="标签设置"
        desc="编辑各板块标签，标签分组，颜色名称等均可编辑。"
      />
      <InnerWrapper>
        <ThreadSelector />
        <ContentWrapper>
          <CategorySelector />
          <LabelBlock>
            <Dot color={COLORS.RED} />
            <LabelTitle>标签名称 1</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.PINK} />
            <LabelTitle>标签名称 6</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.ORANGE} />
            <LabelTitle>标签名称 2</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.YELLOW} />
            <LabelTitle>标签名称 3</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.GREEN} />
            <LabelTitle>标签名称 4</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.GREEN_LIGHT} />
            <LabelTitle>标签名称 5</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.CYAN} />
            <LabelTitle>标签名称 6</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.BLUE} />
            <LabelTitle>标签名称 6</LabelTitle>
          </LabelBlock>
          <LabelBlock>
            <Dot color={COLORS.PURPLE} />
            <LabelTitle>标签名称 6</LabelTitle>
          </LabelBlock>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Tags)
