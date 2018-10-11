import React from 'react'

import { ICON_CMD } from '../../config'
import { Pagi } from '../../components'

import {
  Wrapper,
  CardListWrapper,
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
} from './styles/category_card_list'

import { uid, cutFrom } from '../../utils'

const CategoryCardList = ({
  data: { entries, pageNumber, pageSize, totalCount },
  onEdit,
  onPageChange,
}) => (
  <Wrapper>
    <CardListWrapper>
      {entries.map(cat => (
        <BoxWrapper key={uid.gen()}>
          <Header>
            <Title>
              <TitleText>{cutFrom(cat.title, 10)}</TitleText>
              <LockIcon src={`${ICON_CMD}/lock.svg`} />
            </Title>
            <div onClick={onEdit.bind(this, cat)}>
              <EditIcon src={`${ICON_CMD}/edit.svg`} />
            </div>
          </Header>
          <Desc>{cutFrom(cat.desc, 20)}</Desc>
          <Footer>
            <FooterCounter>4 条内容</FooterCounter>
            <FooterUpdate>更新: 3天前</FooterUpdate>
          </Footer>
        </BoxWrapper>
      ))}
    </CardListWrapper>

    <Pagi
      left="-20px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={onPageChange}
    />
  </Wrapper>
)

export default CategoryCardList
