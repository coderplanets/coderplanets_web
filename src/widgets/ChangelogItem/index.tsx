import { FC, memo, Fragment } from 'react'

import type { TChangelogLayout } from '@/spec'
import { CHANGELOG_LAYOUT } from '@/constant'

import PreviewLayout from './PreviewtLayout'
import OutlineLayout from './OutlineLayout'

type TProps = {
  layout: TChangelogLayout
}

const ChangelogItem: FC<TProps> = ({ layout }) => {
  return (
    <Fragment>
      {layout === CHANGELOG_LAYOUT.PREVIEW ? (
        <PreviewLayout />
      ) : (
        <OutlineLayout />
      )}
    </Fragment>
  )
}

export default memo(ChangelogItem)
