/*
 *
 * BannerNotify
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TMetric, TBannerNotifyLayout } from '@/spec'
import { BANNER_NOTIFY_LAYOUT } from '@/constant'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  InnerWrapper,
  Desc,
  LinkText,
  LinkBtn,
  Row,
  CrossIcon,
  ArrowIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:BannerNotify:index')

type TProps = {
  testid?: string
  metric: TMetric
  layout: TBannerNotifyLayout
}

const BannerNotify: FC<TProps> = ({
  testid = 'banner-notify',
  metric,
  layout,
}) => {
  return (
    <Wrapper testid={testid}>
      <InnerWrapper
        metric={metric}
        center={layout === BANNER_NOTIFY_LAYOUT.CENTER}
      >
        <Desc>我们将在 10 月发布新的版本，敬请期待。</Desc>
        <Row>
          {layout === BANNER_NOTIFY_LAYOUT.DEFAULT ? (
            <Fragment>
              <LinkBtn>查看详情</LinkBtn>
              <CrossIcon />
            </Fragment>
          ) : (
            <Fragment>
              <LinkText>查看详情</LinkText>
              <ArrowIcon />
            </Fragment>
          )}
        </Row>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(BannerNotify)
