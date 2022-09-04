/*
 *
 * DashboardDesc
 *
 */

import { FC, memo } from 'react'

import type { TDashboardLayout } from '@/spec'
import { DASHBOARD_DESC_LAYOUT } from '@/constant'

import { buildLog } from '@/utils/logger'
import PostListExample from './PostListExample'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:DashboardDesc:index')

type TProps = {
  testid?: string
  layout?: TDashboardLayout
}

const DashboardDesc: FC<TProps> = ({
  testid = 'dashboard-desc',
  layout = DASHBOARD_DESC_LAYOUT.POST_LIST,
}) => {
  return (
    <Wrapper testid={testid}>
      {layout === DASHBOARD_DESC_LAYOUT.POST_LIST && <PostListExample />}
    </Wrapper>
  )
}

export default memo(DashboardDesc)
