import { FC } from 'react'

import { REPORT_TYPE } from '@/constant'
import { ICON } from '@/config'
import { Wrapper, ReportIcon, Text, ContentTitle } from './styles/header'

const getCustomTitle = (type: string): string => {
  switch (type) {
    case REPORT_TYPE.USER: {
      return '用户'
    }
    case REPORT_TYPE.COMMENT: {
      return '评论'
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
}

const Header: FC<TProps> = ({ type }) => {
  return (
    <Wrapper>
      <ReportIcon src={`${ICON}/article/report-solid.svg`} />
      <Text>举报{getCustomTitle(type)}</Text>
      <ContentTitle>这是一首简单的小情歌</ContentTitle>
    </Wrapper>
  )
}

export default Header
