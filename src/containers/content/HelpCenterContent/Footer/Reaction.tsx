import { FC } from 'react'

import { ICON } from '@/config'
import type { TVisibles } from '../spec'

import {
  Wrapper,
  RateWrapper,
  ShareWrapper,
  ShareList,
  ShareIcon,
  Title,
  BoxWrapper,
  Button,
  UsefulIcon,
  UsefulText,
  CryIcon,
  UselessWrapper,
  UselessButton,
  UselessText,
} from '../styles/footer/reaction'

import { usefulOnClick, uselessOnClick } from '../logic'

type TProps = {
  visibles: TVisibles
}

const Reaction: FC<TProps> = ({ visibles }) => {
  const { uselessClicked } = visibles
  return (
    <Wrapper>
      <RateWrapper>
        <Title>这些信息是否有用？</Title>
        <BoxWrapper>
          <Button onClick={usefulOnClick}>
            <UsefulIcon src={`${ICON}/useful-color.svg`} />
            <UsefulText>有用</UsefulText>
          </Button>
          <UselessWrapper>
            <UselessButton active={uselessClicked} onClick={uselessOnClick}>
              <CryIcon src={`${ICON}/shape/cry.svg`} active={uselessClicked} />
            </UselessButton>
            <UselessText>没有帮助</UselessText>
          </UselessWrapper>
        </BoxWrapper>
      </RateWrapper>
      <ShareWrapper>
        <ShareList>
          <ShareIcon src={`${ICON}/social/weichat.svg`} />
          <ShareIcon src={`${ICON}/social/twitter.svg`} />
          <ShareIcon src={`${ICON}/social/zhihu.svg`} />
        </ShareList>
      </ShareWrapper>
    </Wrapper>
  )
}

export default Reaction
