/*
 *
 * IconSelector
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'

import { Wrapper, Tabs, Icon, Label, Slider } from './styles/icon_selector'

/* eslint-disable-next-line */
const log = buildLog('c:IconSelector:index')

const IconSelector = ({ items, activeKey, onChange }) => {
  const slideIndex = R.findIndex(R.propEq('key', activeKey), items)

  return (
    <Wrapper testid="selectors">
      <Tabs>
        {items.map(item => (
          <React.Fragment key={item.key}>
            <Label
              onClick={() => onChange(item)}
              checked={activeKey === item.key}
            >
              <Icon src={item.iconSrc} checked={activeKey === item.key} />
            </Label>
          </React.Fragment>
        ))}
        <Slider index={slideIndex} />
      </Tabs>
    </Wrapper>
  )
}

IconSelector.propTypes = {
  items: T.arrayOf(
    T.shape({
      iconSrc: T.string,
      key: T.string,
    })
  ).isRequired,
  activeKey: T.string.isRequired,
  onChange: T.func.isRequired,
}

IconSelector.defaultProps = {}

export default React.memo(IconSelector)
