import React from 'react'
import { ICON_CMD } from '../../config'

import { ThreadSelector } from '../../components'
import {
  Wrapper,
  TitleList,
  Divider,
  Label,
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
      <Label>
        <ThreadSelector
          active={favoriteThread}
          onSelect={changeFavoriteThread}
        />
      </Label>
    </TitleList>
    <Divider />
  </Wrapper>
)

export default Breadcrumbs
