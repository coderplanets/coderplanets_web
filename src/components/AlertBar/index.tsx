/*
 *
 * AlertBar
 *
 */

import { FC, ReactNode, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:AlertBar:index')

type TProps = {
  children: ReactNode
}

const AlertBar: FC<TProps> = ({ children }) => {
  return <Wrapper testid="alertBar">{children}</Wrapper>
}

export default memo(AlertBar)
