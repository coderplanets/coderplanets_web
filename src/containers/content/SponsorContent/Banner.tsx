//

/*
 *
 * SponsorContent
 *
 */

import { FC, memo, useState, Fragment } from 'react'
import Link from 'next/link'

import { buildLog } from '@/utils/logger'
import ViewportTracker from '@/widgets/ViewportTracker'

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

const Banner: FC = () => {
  const [anchorHEnter, setAnchorHEnter] = useState(false)
  const [anchorMEnter, setAnchorMEnter] = useState(false)
  const [anchorLEnter, setAnchorLEnter] = useState(false)

  const anchors = { anchorHEnter, anchorMEnter, anchorLEnter }

  const linkColors = {
    color: '#0D729D',
    hoverColor: '#0D729D',
  }

  return (
    <Fragment>
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
        <SupportTitle>感谢以下团队、个人对本项目的特别赞助</SupportTitle>
        {anchorMEnter && (
          <Link href="mailto:coderplanets@outlook.com" passHref>
            <SponsorBtn {...linkColors} show={anchorLEnter}>
              我要赞助
            </SponsorBtn>
          </Link>
        )}
        {!anchorMEnter && <Divider />}
      </SmileWrapper>
    </Fragment>
  )
}

export default memo(Banner)
