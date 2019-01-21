import React from 'react'

import { ICON_CMD } from 'config'
import { uid } from 'utils'

import {
  PkgItem,
  PkgItemTitle,
  PkgItemYesIcon,
  PkgItemNoIcon,
} from './styles/support'

const MarkIcon = ({ not }) => {
  return not ? (
    <PkgItemNoIcon src={`${ICON_CMD}/cross.svg`} />
  ) : (
    <PkgItemYesIcon src={`${ICON_CMD}/check.svg`} />
  )
}

const Support = ({ items, not }) => (
  <React.Fragment>
    {items.map(item => (
      <PkgItem key={uid.gen()}>
        <MarkIcon not={not} />
        <PkgItemTitle not={not}>{item.title}</PkgItemTitle>
      </PkgItem>
    ))}
  </React.Fragment>
)

export default Support
