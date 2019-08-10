/*
 *
 * StrategicPartners
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import PartnerBanner from './PartnerBanner'
// import Holder from './Holder'

import { Wrapper, Header, Title, Closer } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:StrategicPartners:index')

const StrategicPartners = ({ show, onClose }) => (
  <Wrapper>
    {show && (
      <React.Fragment>
        <Header>
          <Title>特别赞助:</Title>
          <Closer onClick={onClose}>关闭</Closer>
        </Header>
        <PartnerBanner />
      </React.Fragment>
    )}
  </Wrapper>
)

StrategicPartners.propTypes = {
  // https://www.npmjs.com/package/prop-types
  show: T.bool,
  onClose: T.func,
}

StrategicPartners.defaultProps = {
  show: false,
  onClose: log,
}

export default React.memo(StrategicPartners)
