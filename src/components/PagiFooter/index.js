/*
 *
 * PagiFooter
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import Perv from './Perv'
import Next from './Next'

import { Wrapper } from './styles'
/* eslint-disable-next-line */
const log = buildLog('c:PagiFooter:index')

/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 * see: https://stackoverflow.com/questions/5191088/how-to-round-up-a-number-in-javascript
 */
const roundUp = (num, precision = 0) => {
  // eslint-disable-next-line no-restricted-properties
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

const PagiFooter = ({
  children,
  pageNumber,
  pageSize,
  totalCount,
  onChange,
}) => {
  log('pageNumber: ', pageNumber)
  log('pageSize: ', pageSize)
  log('totalCount: ', totalCount)

  return (
    <Wrapper>
      <Perv
        onClick={onChange}
        disabled={pageNumber === 1}
        pageNumber={pageNumber}
      />
      <div>{children}</div>
      <Next
        onClick={onChange}
        disabled={pageNumber >= roundUp(totalCount / pageSize)}
        pageNumber={pageNumber}
      />
    </Wrapper>
  )
}

PagiFooter.propTypes = {
  children: T.node,
  pageNumber: T.number,
  pageSize: T.number,
  totalCount: T.number,
  onChange: T.func,
}

PagiFooter.defaultProps = {
  children: <div>Middle Child</div>,
  pageNumber: 0,
  pageSize: 0,
  totalCount: 0,
  onChange: log,
}

export default React.memo(PagiFooter)
