/*
 *
 * CperMapThread
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'
import MapLoading from './MapLoading'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:CperMapThread')

export const RealMap = dynamic(() => import('./RealMap'), {
  /* eslint-disable react/display-name */
  loading: () => <MapLoading />,
  ssr: false,
})

const CperMapThread: FC = () => {
  return (
    <Wrapper>
      <RealMap />
    </Wrapper>
  )
}

export default memo(CperMapThread)
