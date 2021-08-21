/*
 *
 * Header
 *
 */

import { FC } from 'react'
import { contains } from 'ramda'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import Navigator from '@/components/Navigator'

import type { TProps } from '../index'
import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
} from '../styles/desktop_view/works_layout'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

// let MailBox
const AddOns = dynamic(() => import('../AddOns'), { ssr: false })

const hasNoBorder = (metric: TMetric): boolean =>
  contains(metric, [
    METRIC.EXPLORE,
    METRIC.SPONSOR,
    METRIC.SUPPORT_US,
    METRIC.SUBSCRIBE,
    METRIC.ARTICLE,
    METRIC.MEMBERSHIP,
    METRIC.USER,
    METRIC.COMMUNITY_EDITOR,
    METRIC.HELP_CENTER,
  ])

const WorksHeader: FC<TProps> = ({ metric, c11n, community }) => {
  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testid="header"
      noBorder={hasNoBorder(metric)}
    >
      <InnerWrapper metric={metric}>
        <RouterWrapper>
          <Navigator
            community={community}
            layout={c11n.bannerLayout}
            metric={metric}
          />
        </RouterWrapper>
        <AddOns />
      </InnerWrapper>
    </Wrapper>
  )
}

export default WorksHeader
