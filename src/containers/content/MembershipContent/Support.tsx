import React, { FC } from 'react'

import { ICON, ICON_CMD } from '@/config'

import {
  PkgItem,
  PkgItemTitle,
  PkgItemYesIcon,
  PkgItemNoIcon,
  ArrowIcon,
} from './styles/support'

const MarkIcon = ({ not }) => {
  return not ? (
    <PkgItemNoIcon src={`${ICON_CMD}/cross.svg`} />
  ) : (
    <PkgItemYesIcon src={`${ICON_CMD}/check.svg`} />
  )
}

type TProps = {
  active: boolean
  items: any // TODO:
  not?: boolean
  pkgType: string
}

const Support: FC<TProps> = ({ active, items, not, pkgType }) => (
  <React.Fragment>
    {pkgType !== 'free' && (
      <PkgItem active={active}>
        <ArrowIcon src={`${ICON}/shape/double-arrow.svg`} />
        <PkgItemTitle not={not}>左侧所有功能</PkgItemTitle>
      </PkgItem>
    )}
    {items.map((item) => (
      <PkgItem key={item.title} active={active}>
        <MarkIcon not={not} />
        <PkgItemTitle not={not}>{item.title}</PkgItemTitle>
      </PkgItem>
    ))}
  </React.Fragment>
)

export default React.memo(Support)
