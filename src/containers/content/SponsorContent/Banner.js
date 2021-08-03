//

/*
 *
 * SponsorContent
 *
 */

import React, { useState } from 'react'

import { buildLog } from '@/utils/logger'
import ViewportTracker from '@/components/ViewportTracker'

import {
  SmileWrapper,
  LogosWrapper,
  SponsorText,
  SupportTitle,
  SponsorBtn,
  Divider,
  AnchorH,
  AnchorM,
  AnchorL,
} from './styles/banner'
import { toggleBannerVisiable } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SponsorContent')

const Banner = () => {
  const [anchorHEnter, setAnchorHEnter] = useState(false)
  const [anchorMEnter, setAnchorMEnter] = useState(false)
  const [anchorLEnter, setAnchorLEnter] = useState(false)

  const anchors = { anchorHEnter, anchorMEnter, anchorLEnter }

  const linkColors = {
    color: '#0D729D',
    hoverColor: '#0D729D',
  }

  return (
    <React.Fragment>
      <AnchorH>
        <ViewportTracker
          onEnter={() => setAnchorHEnter(true)}
          onLeave={() => setAnchorHEnter(false)}
        />
      </AnchorH>

      <AnchorM>
        <ViewportTracker
          onEnter={() => {
            setAnchorMEnter(true)
            toggleBannerVisiable(true)
          }}
          onLeave={() => {
            setAnchorMEnter(false)
            toggleBannerVisiable(false)
          }}
        />
      </AnchorM>

      <AnchorL>
        <ViewportTracker
          onEnter={() => setAnchorLEnter(true)}
          onLeave={() => setAnchorLEnter(false)}
        />
      </AnchorL>

      <SmileWrapper anchors={anchors} reverse />
      <SmileWrapper anchors={anchors}>
        <LogosWrapper>
          <SponsorText>2020</SponsorText>
        </LogosWrapper>
        <SupportTitle>感谢以下团队、个人对本站的特别赞助</SupportTitle>
        {anchorMEnter && (
          <SponsorBtn {...linkColors} show={anchorLEnter}>
            我要赞助
          </SponsorBtn>
        )}
        {!anchorMEnter && <Divider />}
      </SmileWrapper>
    </React.Fragment>
  )
}

export default Banner
