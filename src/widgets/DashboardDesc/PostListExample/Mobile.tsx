import { FC, memo, Fragment } from 'react'

import MobileMockup from '@/widgets/MobileMockup'

const Mobile: FC = () => {
  return (
    <Fragment>
      <MobileMockup />
    </Fragment>
  )
}

export default memo(Mobile)
