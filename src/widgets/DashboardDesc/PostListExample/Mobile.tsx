import { FC, memo } from 'react'

import { Divider, Br } from '@/widgets/Common'
import MobileMockup from '@/widgets/MobileMockup'

import {
  MobileWrapper,
  Title,
  SubTitle,
  Desc,
} from '../styles/post_list_example'

const Mobile: FC = () => {
  return (
    <MobileWrapper>
      <Title>
        紧凑简洁
        <SubTitle>(默认)</SubTitle>
      </Title>
      <Desc>侧重展示标题与参与 Upvotes 的用户</Desc>
      <Divider />
      <MobileMockup />
      <Br bottom={80} />
      <Title>三段式</Title>
      <Desc>侧重展示发帖者与参与讨论的用户</Desc>
      <Divider />
      <MobileMockup />
    </MobileWrapper>
  )
}

export default memo(Mobile)
