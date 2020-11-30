import React from 'react'
import T from 'prop-types'

import { SIZE } from '@/constant'

import HorizontalButton from './HorizontalButton'
import VerticalButton from './VerticalButton'

const OrButton = ({ direction, ...restProps }) => {
  return direction === 'row' ? (
    <HorizontalButton {...restProps} />
  ) : (
    <VerticalButton {...restProps} />
  )
}

OrButton.propTypes = {
  // children: T.oneOfType(T.string, T.node),
  size: T.oneOf([SIZE.MEDIUM, SIZE.SMALL]),
  onClick: T.func,
  direction: T.oneOf(['row', 'column']),

  activeKey: T.string,
  group: T.arrayOf(
    T.shape({
      key: T.string,
      title: T.string,
    }),
  ),
}

OrButton.defaultProps = {
  // children: 'Button',
  size: SIZE.MEDIUM,
  // eslint-disable-next-line no-console
  onClick: console.log,
  direction: 'row',

  activeKey: 'hello',
  group: [
    {
      key: 'hello',
      title: 'hello',
    },
    {
      key: 'cps',
      title: 'cps',
    },
  ],
}

export default OrButton
