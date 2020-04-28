/*
 *
 * IconSwitcher
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog, nilOrEmpty } from '@utils'

import {
  Wrapper,
  AccessZone,
  Tabs,
  Icon,
  Label,
  Slider,
} from './styles/icon_selector'

/* eslint-disable-next-line */
const log = buildLog('c:IconSwitcher:index')

const IconSwitcher = ({ items, activeKey, onChange }) => {
  const slideIndex = R.findIndex(R.propEq('key', activeKey), items)

  return (
    <Wrapper testid="selectors">
      <AccessZone />
      <Tabs>
        {items.map(item => (
          <React.Fragment key={item.key}>
            <Label
              onClick={() => onChange(item)}
              checked={activeKey === item.key}
            >
              {!nilOrEmpty(item.localIcon) && (
                <React.Fragment>{item.localIcon}</React.Fragment>
              )}

              {!nilOrEmpty(item.iconSrc) && (
                <Icon src={item.iconSrc} checked={activeKey === item.key} />
              )}
            </Label>
          </React.Fragment>
        ))}
        <Slider index={slideIndex} />
      </Tabs>
    </Wrapper>
  )
}

IconSwitcher.propTypes = {
  items: T.arrayOf(
    T.shape({
      iconSrc: T.string,
      localIcon: T.oneOfType(T.string, T.node),
      key: T.string,
    })
  ).isRequired,
  activeKey: T.string.isRequired,
  onChange: T.func.isRequired,
}

IconSwitcher.defaultProps = {}

export default React.memo(IconSwitcher)
