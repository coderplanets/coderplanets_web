import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  TitlesWrapper,
  TitleLink,
  CountsWrapper,
  CountItem,
  CountIcon,
  StarIcon,
  CountText,
  CountDivider,
} from './styles/header'

const TitlesInfo = () => (
  <TitlesWrapper>
    <TitleLink>mydearxym </TitleLink>/{' '}
    <TitleLink>coderplanets_server</TitleLink>{' '}
  </TitlesWrapper>
)
const CountsInfo = () => (
  <CountsWrapper>
    <CountItem>
      <CountIcon src={`${ICON_CMD}/repo_watch.svg`} />
      <CountText>Watch: 7</CountText>
      <CountDivider src={`${ICON_CMD}/more.svg`} />
    </CountItem>
    <CountItem>
      <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
      <CountText>Star: 11</CountText>
      <CountDivider src={`${ICON_CMD}/more.svg`} />
    </CountItem>
    <CountItem>
      <CountIcon src={`${ICON_CMD}/repo_fork.svg`} />
      <CountText>Fork: 44</CountText>
    </CountItem>
  </CountsWrapper>
)

const Header = () => (
  <Wrapper>
    <TitlesInfo />
    <CountsInfo />
  </Wrapper>
)

export default Header
