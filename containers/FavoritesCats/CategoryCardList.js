import React from 'react'
import TimeAgo from 'timeago-react'

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
import { loadCategories, switchToUpdater } from './logic'

const CategoryCardList = ({
  data: { entries, pageNumber, pageSize, totalCount },
  onSelect,
}) => (
  <Wrapper>
    <CardListWrapper>
      {entries.map(cat => (
        <BoxWrapper key={uid.gen()}>
          <Header>
            <Title onClick={onSelect.bind(this, cat)}>
              <TitleText>{cutFrom(cat.title, 10)}</TitleText>
              <LockIcon src={`${ICON_CMD}/lock.svg`} />
            </Title>
            <div onClick={switchToUpdater.bind(this, cat)}>
              <EditIcon src={`${ICON_CMD}/edit.svg`} />
            </div>
          </Header>
          <Desc onClick={onSelect.bind(this, cat)}>
            {cutFrom(cat.desc, 20)}
          </Desc>
          <Footer onClick={onSelect.bind(this, cat)}>
            <FooterCounter>{cat.totalCount} 条内容</FooterCounter>
            <FooterUpdate>
              {' '}
              更新: <TimeAgo datetime={cat.updatedAt} locale="zh_CN" />
            </FooterUpdate>
          </Footer>
        </BoxWrapper>
      ))}
    </CardListWrapper>

    <Pagi
      left="-20px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={loadCategories}
    />
  </Wrapper>
)

export default CategoryCardList
