/*
 *
 * StrategicPartners
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import PartnerBanner from './PartnerBanner'
// import Holder from './Holder'

import { Wrapper, Header, Title, Closer } from './styles'
import { makeDebugger } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('c:StrategicPartners:index')

const StrategicPartners = ({ show, onClose }) => (
  <Wrapper>
    {show ? (
      <React.Fragment>
        <Header>
          <Title>特别赞助:</Title>
          <Closer onClick={onClose}>关闭</Closer>
        </Header>
        <PartnerBanner />
      </React.Fragment>
    ) : null}
  </Wrapper>
)

StrategicPartners.propTypes = {
  // https://www.npmjs.com/package/prop-types
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

StrategicPartners.defaultProps = {
  show: false,
  onClose: debug,
}

export default React.memo(StrategicPartners)
