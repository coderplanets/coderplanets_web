import React from 'react'

import { ICON } from '@/config'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'

import type { TREPORT_ITEM } from '../spec'

import {
  Option,
  SelectWrapper,
  Title,
  QuestionIcon,
} from '../styles/article_report/main'
import { selectItem, explainItem } from '../logic'

type TProps = {
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
}

const Main: React.FC<TProps> = ({ items, activeItem }) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <Option key={item.raw}>
          <SelectWrapper onClick={() => selectItem(item.raw)}>
            <Checker checked={item.raw === activeItem.raw} />
            <Title active={item.raw === activeItem.raw}>{item.title}</Title>
          </SelectWrapper>
          <SpaceGrow />
          <QuestionIcon
            src={`${ICON}/shape/question.svg`}
            onClick={() => explainItem(item.raw)}
          />
        </Option>
      ))}
    </React.Fragment>
  )
}

export default Main
