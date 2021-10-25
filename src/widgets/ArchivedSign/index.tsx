/*
 * ArchivedSign
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

type TProps = {
  testid?: string
  date?: string
}

const RealArchivedSign = dynamic(() => import('./RealArchivedSign'), {
  ssr: false,
})

const ArchivedSign: FC<TProps> = ({ testid = 'archived-sign', date }) => {
  return <RealArchivedSign testid={testid} date={date} />
}

export default memo(ArchivedSign)
