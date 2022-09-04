/*
 *
 * Pagi
 *
 */

import { FC, memo } from 'react'
import { merge } from 'ramda'

import type { TProps } from './index'
import { buildLog } from '@/utils/logger'
import Perv from './Perv'
import Next from './Next'

import { Wrapper, EmptyWrapper, BottomMsg } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Pagi:index')

const defaultMargin = {
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
}

/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 * see: https://stackoverflow.com/questions/5191088/how-to-round-up-a-number-in-javascript
 */
const roundUp = (num: number, precision = 0): number => {
  // eslint-disable-next-line no-restricted-properties
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

const BottomFooter = ({ show, msg }) => {
  if (show) return <BottomMsg>{msg}</BottomMsg>
  return <div />
}

const hasExtraPage = (totalCount, pageSize) => totalCount > pageSize

const Pagi: FC<TProps> = ({
  children = <div />,
  type = 'bottom',
  pageNumber = 0,
  pageSize = 0,
  totalCount = 0,
  onChange = log,

  margin = {},
  showBottomMsg = false,
  emptyMsg = '还没有讨论',
  noMoreMsg = '没有更多讨论了',
}) => {
  const theMargin = merge(defaultMargin, margin)

  if (totalCount === 0) {
    return (
      <EmptyWrapper margin={theMargin}>
        <BottomFooter show={showBottomMsg} msg={emptyMsg} />
      </EmptyWrapper>
    )
  }

  return (
    <>
      {hasExtraPage(totalCount, pageSize) ? (
        <Wrapper margin={theMargin}>
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
        <EmptyWrapper margin={theMargin}>
          <BottomFooter show={showBottomMsg} msg={noMoreMsg} />
        </EmptyWrapper>
      )}
    </>
  )
}

export default memo(Pagi)
