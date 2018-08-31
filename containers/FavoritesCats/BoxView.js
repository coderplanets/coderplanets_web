import React from 'react'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'

import {
  Wrapper,
  BoxWrapper,
  Header,
  Title,
  TitleText,
  LockIcon,
  EditIcon,
  Footer,
  FooterCounter,
  FooterUpdate,
  Desc,
} from './styles/box_view'

const BoxView = ({ entries, onEdit }) => {
  return (
    <Wrapper>
      {entries.map(cat => (
        <BoxWrapper key={shortid.generate()}>
          <Header>
            <Title>
              <TitleText>{cat.title}</TitleText>
              <LockIcon src={`${ICON_ASSETS}/cmd/lock.svg`} />
            </Title>
            <div onClick={onEdit}>
              <EditIcon src={`${ICON_ASSETS}/cmd/edit.svg`} />
            </div>
          </Header>
          <Desc>{cat.desc}</Desc>
          <Footer>
            <FooterCounter>4 条内容</FooterCounter>
            <FooterUpdate>更新: 3天前</FooterUpdate>
          </Footer>
        </BoxWrapper>
      ))}
    </Wrapper>
  )
}

export default BoxView
