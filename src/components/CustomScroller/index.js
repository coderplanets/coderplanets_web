import React from 'react'
import T from 'prop-types'

import HorizontalScroller from './HorizontalScroller'
import VerticalScroller from './VerticalScroller'

const CustomScroller = ({ direction, ...restProps }) => {
  return direction === 'vertical' ? (
    <VerticalScroller {...restProps} />
  ) : (
    <HorizontalScroller {...restProps} />
  )
}

CustomScroller.propTypes = {
  direction: T.oneOf(['vertical', 'horizontal']),
  children: T.node.isRequired,
  height: T.string,
  width: T.string,
  shadowSize: T.oneOf(['small', 'medium', 'large']),
  // hack for custom scrollbar
  innerHeight: T.string,
  autoHide: T.bool,
  withBorder: T.bool,
}

CustomScroller.defaultProps = {
  direction: 'vertical',

  height: '100%',
  width: '100%',
  shadowSize: 'small',
  innerHeight: '100%',
  autoHide: false,
  withBorder: false,
}

export default React.memo(CustomScroller)
