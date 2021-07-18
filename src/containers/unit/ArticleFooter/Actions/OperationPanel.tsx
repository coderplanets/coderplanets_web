import { FC, memo } from 'react'

import { ICON } from '@/config'

import ActionItem from './ActionItem'

import {
  Wrapper,
  InnerWrapper,
  IndexArrowIcon,
} from '../styles/actions/operation_panel'

const tmpItems = [
  {
    id: '0',
    author: {
      login: '1',
      nickname: 'mydearxym',
      avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
    },
    insertedAt: '3天前',
    article: {
      title: '这个社区太棒了',
    },
    community: {
      raw: 'javascript',
    },
  },
]

const OperationPanel: FC = () => {
  return (
    <Wrapper>
      <IndexArrowIcon src={`${ICON}/shape/arrow-solid.svg`} />
      <InnerWrapper>
        {tmpItems.map((item) => (
          <ActionItem key={item.id} item={item} />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(OperationPanel)
