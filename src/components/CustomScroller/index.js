import React from 'react'
import T from 'prop-types'

import { isCypressRunning } from '@/utils'
import HorizontalScroller from './HorizontalScroller'
import VerticalScroller from './VerticalScroller'

const CustomScroller = ({ direction, ...restProps }) => {
  const isE2ETesting = isCypressRunning()

  if (isE2ETesting) {
    return <div>{restProps.children}</div>
  }

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
  barSize: T.oneOf(['tiny', 'small', 'medium', 'large']),
  showShadow: T.bool,
  // hack for custom scrollbar
  innerHeight: T.string,
  autoHide: T.bool,
  withBorder: T.bool,
}

CustomScroller.defaultProps = {
  direction: 'vertical',
  height: '100%',
  width: '100%',
  showShadow: true,
  shadowSize: 'small',
  barSize: 'small',
  innerHeight: '100%',
  autoHide: false,
  withBorder: false,
}

export default React.memo(CustomScroller)
