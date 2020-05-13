/*
 *
 * StrategicPartners
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'
import PartnerBanner from './PartnerBanner'
// import Holder from './Holder'

import { Wrapper, Header, Title, AboutIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:StrategicPartners:index')

const StrategicPartners = ({ show, onAbout }) => {
  return (
    <Wrapper>
      {show && (
        <React.Fragment>
          <Header>
            <Title>产品推广</Title>
            <div onClick={onAbout}>
              <AboutIcon src={`${ICON_CMD}/sidebar_ads_about.svg`} />
            </div>
          </Header>
          <PartnerBanner />
        </React.Fragment>
      )}
    </Wrapper>
  )
}

StrategicPartners.propTypes = {
  show: T.bool,
  onAbout: T.func,
}

StrategicPartners.defaultProps = {
  show: true,
  onAbout: log,
}

export default React.memo(StrategicPartners)
