import { FC, memo } from 'react'

import type { TPostLayout } from '@/spec'

import { POST_LAYOUT } from '@/constant'

import { SpaceGrow, Br } from '@/widgets/Common'
// import CheckLabel from '@/widgets/CheckLabel'

import {
  Wrapper,
  Section,
  SelectWrapper,
  Inputer,
  Title,
  Row,
} from '../styles/ui/basic_info'

type TProps = {
  _layout?: TPostLayout
}

const BasicInfo: FC<TProps> = ({ _layout = POST_LAYOUT.UPVOTE_FIRST }) => {
  return (
    <Wrapper>
      <Section>
        <Row>
          <Title>基本信息</Title>
          <SpaceGrow />
        </Row>
        <SelectWrapper>
          <div>Site Logo</div>
          <Br bottom={20} />
          <div>社区名称</div>
          <Inputer />
          <div>社区 URL</div>
          <Inputer />
          <div>主题色</div>
        </SelectWrapper>
      </Section>
    </Wrapper>
  )
}

export default memo(BasicInfo)
