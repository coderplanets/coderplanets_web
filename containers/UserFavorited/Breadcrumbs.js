import React from 'react'

import { ICON_CMD } from '@config'
import { THREAD } from '@constant'

import ThreadSelector from '@components/ThreadSelector'

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
          options={[THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]}
        />
      </ThreadSelectorLabel>
    </TitleList>
    <Divider />
  </Wrapper>
)

export default Breadcrumbs
