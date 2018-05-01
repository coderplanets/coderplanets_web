/*
 *
 * Pagi
 *
 */

import React from 'react'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils'
import { PagiWrapper, BottomMsg } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Pagi:index')
/* eslint-enable no-unused-vars */

const hasExtraPage = (totalCount, pageSize) => totalCount > pageSize

export const PagiCustomRender = (current, type, originalElement) => {
  /* eslint-disable */
  if (type === 'prev') {
    return <a>上一页</a>
  } else if (type === 'next') {
    return <a>下一页</a>
  }
  /* eslint-enable */
  return originalElement
}

const Pagi = ({
  pageNumber,
  pageSize,
  totalCount,
  bottomMsg,
  left,
  top,
  bottom,
  onChange,
}) => {
  if (totalCount === 0) {
    return <div />
  }
  return (
    <PagiWrapper left={left} top={top} bottom={bottom}>
      {hasExtraPage(totalCount, pageSize) ? (
        <Pagination
          current={pageNumber}
          pageSize={pageSize}
          total={totalCount}
          itemRender={PagiCustomRender}
          onChange={onChange}
        />
      ) : (
        <BottomMsg>{bottomMsg}</BottomMsg>
      )}
    </PagiWrapper>
  )
}

Pagi.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  // showBottomMsg: PropTypes.bool,
  bottomMsg: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,

  onChange: PropTypes.func.isRequired,
}

Pagi.defaultProps = {
  bottomMsg: '没有更多评论了',
  left: '0px',
  top: '40px',
  bottom: '30px',
  // showBottomMsg: true,
}

export default Pagi
