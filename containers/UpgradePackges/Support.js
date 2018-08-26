import React from 'react'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'

import {
  PkgItem,
  PkgItemTitle,
  PkgItemYesIcon,
  PkgItemNoIcon,
} from './styles/support'

const MarkIcon = ({ not }) => {
  return not ? (
    <PkgItemNoIcon src={`${ICON_ASSETS}/cmd/cross.svg`} />
  ) : (
    <PkgItemYesIcon src={`${ICON_ASSETS}/cmd/check.svg`} />
  )
}

const Support = ({ items, not }) => (
  <React.Fragment>
    {items.map(item => (
      <PkgItem key={shortid.generate()}>
        <MarkIcon not={not} />
        <PkgItemTitle not={not}>{item.title}</PkgItemTitle>
      </PkgItem>
    ))}
  </React.Fragment>
)

export default Support
