import React from 'react'

import { ICON } from '@/config'
import { REPORT } from '@/constant'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'

import type { TREPORT_ITEM } from '../spec'

import {
  Wrapper,
  Option,
  Title,
  QuestionIcon,
  Note,
} from '../styles/article_report'

type TProps = {
  items: TREPORT_ITEM[]
}

const ArticleReport: React.FC<TProps> = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Option key={item.raw}>
          <Checker checked={item.checked} />
          <Title>{item.title}</Title>
          <SpaceGrow />
          <QuestionIcon src={`${ICON}/shape/question.svg`} />
        </Option>
      ))}

      <Note>
        举报成功后社区志愿者会在第一时间处理，处理结果会公示在这里。如果你对社区治理有更好的想法或建议，请联系我们。
      </Note>
    </Wrapper>
  )
}

export default ArticleReport
