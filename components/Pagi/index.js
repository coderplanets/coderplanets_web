/*
 *
 * Pagi
 *
 */

import React from 'react'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'

import { makeDebugger } from 'utils'
import MobilePagination from './MobilePagination'
import {
  PagiWrapper,
  DesktopPagiWrapper,
  MobilePagiWrapper,
  CustomText,
  BottomMsg,
} from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:Pagi:index')

const hasExtraPage = (totalCount, pageSize) => totalCount > pageSize

export const PagiCustomRender = (current, type, originalElement) => {
  /* eslint-disable */
  if (type === 'prev') {
    return <CustomText>上一页</CustomText>
  } else if (type === 'next') {
    return <CustomText>下一页</CustomText>
  }
  /* eslint-enable */
  return originalElement
}

const BottomFooter = ({ show, msg }) => {
  if (show) return <BottomMsg>{msg}</BottomMsg>
  return <div />
}

const Pagi = ({
  pageNumber,
  pageSize,
  totalCount,
  showBottomMsg,
  emptyMsg,
  noMoreMsg,
  left,
  top,
  bottom,
  onChange,
}) => {
  if (totalCount === 0) {
    return (
      <PagiWrapper left={left} top={top} bottom={bottom}>
        <BottomFooter show={showBottomMsg} msg={emptyMsg} />
      </PagiWrapper>
    )
  }
  return (
    <PagiWrapper left={left} top={top} bottom={bottom}>
      {hasExtraPage(totalCount, pageSize) ? (
        <React.Fragment>
          <DesktopPagiWrapper>
            <Pagination
              current={pageNumber}
              pageSize={pageSize}
              total={totalCount}
              itemRender={PagiCustomRender}
              onChange={onChange}
            />
          </DesktopPagiWrapper>
          <MobilePagiWrapper>
            <MobilePagination
              current={pageNumber}
              pageSize={pageSize}
              total={totalCount}
              itemRender={PagiCustomRender}
              onChange={onChange}
            />
          </MobilePagiWrapper>
        </React.Fragment>
      ) : (
        <BottomFooter show={showBottomMsg} msg={noMoreMsg} />
      )}
    </PagiWrapper>
  )
}

Pagi.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  // showBottomMsg: PropTypes.bool,
  emptyMsg: PropTypes.string,
  noMoreMsg: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  showBottomMsg: PropTypes.bool,

  onChange: PropTypes.func.isRequired,
}

Pagi.defaultProps = {
  emptyMsg: '还没有评论',
  noMoreMsg: '没有更多评论了',
  showBottomMsg: false,
  left: '0px',
  top: '30px',
  bottom: '30px',
}

export default Pagi
