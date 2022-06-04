import { FC, memo } from 'react'

import type { TPostLayout } from '@/spec'

import { POST_LAYOUT } from '@/constant'

import Button from '@/widgets/Buttons/Button'
import { SpaceGrow } from '@/widgets/Common'
// import CheckLabel from '@/widgets/CheckLabel'

import {
  Wrapper,
  Section,
  SelectWrapper,
  ExampleBtn,
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
          <ExampleBtn>
            <Button size="tiny" ghost noBorder>
              查看示例
            </Button>
          </ExampleBtn>
        </Row>
        <SelectWrapper>
          <div>Logo / alias</div>
        </SelectWrapper>
      </Section>
    </Wrapper>
  )
}

export default memo(BasicInfo)
