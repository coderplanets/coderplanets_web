import { FC, Fragment, memo } from 'react'

import { ICON } from '@/config'

import {
  PkgItem,
  PkgItemTitle,
  PkgItemYesIcon,
  ArrowIcon,
} from './styles/support'

type TProps = {
  active: boolean
  items: any // TODO:
  not?: boolean
  pkgType: string
}

const Support: FC<TProps> = ({ active, items, not, pkgType }) => (
  <Fragment>
    {pkgType !== 'free' && (
      <PkgItem active={active}>
        <ArrowIcon src={`${ICON}/shape/double-arrow.svg`} />
        <PkgItemTitle not={not}>左侧所有功能</PkgItemTitle>
      </PkgItem>
    )}
    {items.map((item) => (
      <PkgItem key={item.title} active={active}>
        <PkgItemYesIcon />
        <PkgItemTitle not={not}>{item.title}</PkgItemTitle>
      </PkgItem>
    ))}
  </Fragment>
)

export default memo(Support)
