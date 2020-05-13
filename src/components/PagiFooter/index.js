/*
 *
 * Pagi
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import Perv from './Perv'
import Next from './Next'

import { Wrapper, EmptyWrapper, BottomMsg } from './styles'
/* eslint-disable-next-line */
const log = buildLog('c:Pagi:index')

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

const BottomFooter = ({ show, msg }) => {
  if (show) return <BottomMsg>{msg}</BottomMsg>
  return <div />
}

const hasExtraPage = (totalCount, pageSize) => totalCount > pageSize

const Pagi = ({
  children,
  type,
  pageNumber,
  pageSize,
  totalCount,
  margin,
  onChange,
  showBottomMsg,
  emptyMsg,
  noMoreMsg,
}) => {
  if (totalCount === 0) {
    return (
      <EmptyWrapper margin={margin}>
        <BottomFooter show={showBottomMsg} msg={emptyMsg} />
      </EmptyWrapper>
    )
  }

  return (
    <React.Fragment>
      {hasExtraPage(totalCount, pageSize) ? (
        <Wrapper margin={margin}>
          <Perv
            type={type}
            onChange={onChange}
            disabled={pageNumber === 1}
            pageNumber={pageNumber}
          />
          <div>{children}</div>
          <Next
            type={type}
            onChange={onChange}
            disabled={pageNumber >= roundUp(totalCount / pageSize)}
            pageNumber={pageNumber}
          />
        </Wrapper>
      ) : (
        <EmptyWrapper>
          <BottomFooter show={showBottomMsg} msg={noMoreMsg} />
        </EmptyWrapper>
      )}
    </React.Fragment>
  )
}

Pagi.propTypes = {
  children: T.node,
  type: T.oneOf(['bottom', 'center']),
  pageNumber: T.number,
  pageSize: T.number,
  totalCount: T.number,
  margin: T.shape({
    top: T.string,
    bottom: T.string,
    left: T.string,
    right: T.string,
  }),
  emptyMsg: T.string,
  noMoreMsg: T.string,
  showBottomMsg: T.bool,
  onChange: T.func,
}

Pagi.defaultProps = {
  children: <div />,
  type: 'bottom',
  pageNumber: 0,
  pageSize: 0,
  totalCount: 0,
  onChange: log,
  margin: {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
  showBottomMsg: false,
  emptyMsg: '还没有评论',
  noMoreMsg: '没有更多评论了',
}

export default React.memo(Pagi)
