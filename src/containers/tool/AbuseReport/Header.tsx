import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { REPORT_TYPE } from '@/constant'
import { ICON } from '@/config'

import type { TREPORT_ITEM, TView } from './spec'
import { Wrapper, ReportIcon, Text, ContentTitle } from './styles/header'

const getCustomTitle = (type: string): string => {
  switch (type) {
    case REPORT_TYPE.USER: {
      return '用户'
    }
    case REPORT_TYPE.COMMENT: {
      return '讨论'
    }
    case REPORT_TYPE.COMMUNITY: {
      return '社区'
    }
    default: {
      return '帖子'
    }
  }
}

type TProps = {
  type: string
  view: TView
  activeItem: TREPORT_ITEM
  article: TArticle
}

const Header: FC<TProps> = ({ type, view, activeItem, article }) => {
  return (
    <Wrapper showShadow={view === 'detail'}>
      <ReportIcon src={`${ICON}/article/report-solid.svg`} />
      {view === 'detail' ? (
        <Text>{activeItem.title}</Text>
      ) : (
        <Text>举报{getCustomTitle(type)}</Text>
      )}
      <ContentTitle>{article.title}</ContentTitle>
    </Wrapper>
  )
}

export default memo(Header)
