/*
 * ArchivedSign
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

type TProps = {
  testid?: string
}

const RealArchivedSign = dynamic(() => import('./RealArchivedSign'), {
  ssr: false,
})

const ArchivedSign: FC<TProps> = ({ testid = 'archived-sign' }) => {
  return <RealArchivedSign testid={testid} />
}

export default memo(ArchivedSign)
