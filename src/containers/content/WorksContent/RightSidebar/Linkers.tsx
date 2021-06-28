import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  LinkCardWrapper,
  Digest,
  Title,
  Desc,
  Totol,
  ButtonWrapper,
  ArrowIcon,
} from '../styles/right_sidebar/linkers'

const Addr = ({ title, desc }) => {
  return (
    <LinkCardWrapper>
      <Digest>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Digest>
      <ButtonWrapper>
        <Totol>238+</Totol>
        <ArrowIcon src={`${ICON}/shape/arrow.svg`} />
      </ButtonWrapper>
    </LinkCardWrapper>
  )
}

const MakersInfo: FC = () => {
  return (
    <Wrapper>
      <Addr title="产品猎人" desc="优秀产品/服务的酷导航.." />
      <Addr title="魔鬼细节" desc="有趣有爱的产品神细节.." />
    </Wrapper>
  )
}

export default memo(MakersInfo)
