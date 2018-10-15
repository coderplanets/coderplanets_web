import React from 'react'
import { ICON_CMD } from '../../config'

import { ThreadSelector } from '../../components'

import {
  Wrapper,
  TitleList,
  Divider,
  Label,
  ThreadSelectorLabel,
  LabelText,
  LabelIcon,
  LabelSlash,
} from './styles/breadcrumbs'

import { THREAD } from '../../utils'
// iconSrc={`${ICON_CMD}/folder.svg`}
const Breadcrumbs = ({
  gotoParent,
  category,
  curThread,
  totalCount,
  changeFavoriteThread,
}) => (
  <Wrapper>
    <TitleList>
      <Label onClick={gotoParent}>
        <LabelIcon src={`${ICON_CMD}/folder.svg`} />
        <LabelText>收藏夹</LabelText>
      </Label>
      <LabelSlash>/</LabelSlash>
      <Label>
        <div>{category.title}</div>
      </Label>
      <LabelSlash>/</LabelSlash>
      <ThreadSelectorLabel>
        <ThreadSelector
          active={curThread}
          onSelect={changeFavoriteThread}
          totalCount={totalCount}
          options={[THREAD.POST, THREAD.JOB, THREAD.VIDEO]}
        />
      </ThreadSelectorLabel>
    </TitleList>
    <Divider />
  </Wrapper>
)

export default Breadcrumbs
