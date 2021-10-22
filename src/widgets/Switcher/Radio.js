/*
 *
 * Radio
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import { SIZE } from '@/constant'

import { Wrapper, Label } from './styles/radio'

/* eslint-disable-next-line */
const log = buildLog('c:Radio:index')

const Radio = ({ items, activeKey, size, onChange }) => {
  return (
    <Wrapper testid="radio">
      {items.map((item) => (
        <Label
          key={item.key}
          checked={item.key === activeKey}
          onClick={() => onChange?.(item)}
          dimOnActive={item.dimOnActive}
          size={size}
        >
          {item.value}
        </Label>
      ))}
    </Wrapper>
  )
}

Radio.propTypes = {
  items: T.arrayOf(
    T.shape({
      value: T.string,
      key: T.oneOfType([T.string, T.bool]),
      dimOnActive: T.oneOfType([T.bool, T.instanceOf(null)]),
    }),
  ).isRequired,
  activeKey: T.oneOfType([T.string, T.bool]).isRequired,
  onChange: T.func.isRequired,
  size: T.oneOf([SIZE.MEDIUM, SIZE.SMALL]),
}

Radio.defaultProps = {
  size: SIZE.MEDIUM,
}

export default React.memo(Radio)
