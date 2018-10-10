import React from 'react'

import { ICON_CMD } from '../../config'
import { EmptyLabel } from '../../components'

import {
  Wrapper,
  MsgWrapper,
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

import { uid } from '../../utils'

const CardList = ({ entries, onEdit }) => (
  <React.Fragment>
    {entries.map(cat => (
      <BoxWrapper key={uid.gen()}>
        <Header>
          <Title>
            <TitleText>{cat.title}</TitleText>
            <LockIcon src={`${ICON_CMD}/lock.svg`} />
          </Title>
          <div onClick={onEdit}>
            <EditIcon src={`${ICON_CMD}/edit.svg`} />
          </div>
        </Header>
        <Desc>{cat.desc}</Desc>
        <Footer>
          <FooterCounter>4 条内容</FooterCounter>
          <FooterUpdate>更新: 3天前</FooterUpdate>
        </Footer>
      </BoxWrapper>
    ))}
  </React.Fragment>
)

const BoxView = ({ data, onEdit }) => {
  const { entries, totalCount } = data

  return (
    <Wrapper>
      {totalCount === 0 ? (
        <MsgWrapper>
          <EmptyLabel text="你还没有任何收藏夹" size="large" />
        </MsgWrapper>
      ) : (
        <CardList entries={entries} onEdit={onEdit} />
      )}
    </Wrapper>
  )
}

export default BoxView
