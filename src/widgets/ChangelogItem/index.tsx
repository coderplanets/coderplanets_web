import { FC, memo, Fragment } from 'react'

import DefaultLayout from './DefaultLayout'
import OutlineLayout from './OutlineLayout'

type TProps = {
  layout?: 'default' | 'outline'
}

const ChangelogItem: FC<TProps> = ({ layout = 'default' }) => {
  return (
    <Fragment>
      {layout === 'default' ? <DefaultLayout /> : <OutlineLayout />}
    </Fragment>
  )
}

export default memo(ChangelogItem)
