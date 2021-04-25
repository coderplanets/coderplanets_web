import React from 'react'

import { ICON } from '@/config'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'

import type { TREPORT_ITEM } from '../spec'

import {
  Wrapper,
  Option,
  SelectWrapper,
  Title,
  QuestionIcon,
  Note,
} from '../styles/article_report'
import { selectItem } from '../logic'

type TProps = {
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
}

const ArticleReport: React.FC<TProps> = ({ items, activeItem }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Option key={item.raw}>
          <SelectWrapper onClick={() => selectItem(item.raw)}>
            <Checker checked={item.raw === activeItem.raw} />
            <Title>{item.title}</Title>
          </SelectWrapper>
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
