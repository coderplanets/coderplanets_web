/*
 *
 * DashboardDesc
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import PostListExample from './PostListExample'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DashboardDesc:index')

type TProps = {
  testid?: string
}

const DashboardDesc: FC<TProps> = ({ testid = 'dashboard-desc' }) => {
  return (
    <Wrapper testid={testid}>
      <PostListExample />
    </Wrapper>
  )
}

export default memo(DashboardDesc)
