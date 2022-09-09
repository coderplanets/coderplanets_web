/*
 *
 * BannerNotify
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TMetric, TBannerNotifyLayout, TColorName } from '@/spec'
import { BANNER_NOTIFY_LAYOUT, ANCHOR } from '@/constant'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  InnerWrapper,
  Desc,
  LinkText,
  LinkBtn,
  Row,
  NotifyIcon,
  CrossIcon,
  ArrowIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:BannerNotify:index')

type TProps = {
  testid?: string
  metric: TMetric
  layout: TBannerNotifyLayout
  bg: TColorName
}

const DETAIL_TEXT =
  '本站即将迁移到 Groupher.com, 为中小产品团队提供社区反馈服务，如果你对此有兴趣，欢迎加 v(mydearxym) 详聊。'

const BannerNotify: FC<TProps> = ({
  testid = 'banner-notify',
  metric,
  layout,
  bg,
}) => {
  return (
    <Wrapper testid={testid} bg={bg} id={ANCHOR.GLOBAL_HEADER_ID}>
      <InnerWrapper
        metric={metric}
        center={layout === BANNER_NOTIFY_LAYOUT.CENTER}
      >
        <Row>
          <NotifyIcon />
          <Desc>网站改版迁移中，服务暂不可用。</Desc>
        </Row>

        <Row>
          {layout === BANNER_NOTIFY_LAYOUT.DEFAULT ? (
            <Fragment>
              <LinkBtn onClick={() => alert(DETAIL_TEXT)} bg={bg}>
                查看详情
              </LinkBtn>
              <CrossIcon />
            </Fragment>
          ) : (
            <Fragment>
              <LinkText onClick={() => alert(DETAIL_TEXT)}>查看详情</LinkText>
              <ArrowIcon />
            </Fragment>
          )}
        </Row>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(BannerNotify)
