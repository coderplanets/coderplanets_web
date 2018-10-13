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

// iconSrc={`${ICON_CMD}/folder.svg`}
const Breadcrumbs = ({
  gotoParent,
  category,
  favoriteThread,
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
          active={favoriteThread}
          onSelect={changeFavoriteThread}
        />
      </ThreadSelectorLabel>
    </TitleList>
    <Divider />
  </Wrapper>
)

export default Breadcrumbs
