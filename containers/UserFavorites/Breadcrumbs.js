import React from 'react'
import { ICON_CMD } from '../../config'

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
const Breadcrumbs = ({ gotoParent }) => (
  <Wrapper>
    <TitleList>
      <Label onClick={gotoParent}>
        <LabelIcon src={`${ICON_CMD}/folder.svg`} />
        <LabelText>收藏夹</LabelText>
      </Label>
      <LabelSlash>/</LabelSlash>
      <Label>
        <div>美女</div>
      </Label>
    </TitleList>
    <Divider />
  </Wrapper>
)

export default Breadcrumbs
