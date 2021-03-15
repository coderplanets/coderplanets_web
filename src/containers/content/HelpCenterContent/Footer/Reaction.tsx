import React from 'react'

import type { TVisibles } from '../spec'

import { ICON } from '@/config'

import {
  Wrapper,
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

const Reaction: React.FC<TProps> = ({ visibles }) => {
  const { uselessClicked } = visibles
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Reaction
