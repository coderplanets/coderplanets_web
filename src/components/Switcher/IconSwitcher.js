/*
 *
 * IconSwitcher
 *
 */

import React, { useEffect, useState, useRef } from 'react'
import T from 'prop-types'
import { findIndex, propEq } from 'ramda'

import { buildLog, nilOrEmpty } from '@/utils'

import {
  Wrapper,
  AccessZone,
  Tabs,
  IconHoverWrapper,
  HoverText,
  Icon,
  Label,
  Slider,
} from './styles/icon_selector'

/* eslint-disable-next-line */
const log = buildLog('c:IconSwitcher:index')

const IconComp = ({ item, activeKey, onHover }) => {
  if (!item.desc)
    return <Icon src={item.iconSrc} checked={activeKey === item.key} />

  return (
    <IconHoverWrapper>
      <Icon src={item.iconSrc} checked={activeKey === item.key} />
      <HoverText>{item.desc}</HoverText>
    </IconHoverWrapper>
  )
}

const IconSwitcher = ({ items, activeKey, onChange, onHover }) => {
  const slideIndex = findIndex(propEq('key', activeKey), items)

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
                // <Icon src={item.iconSrc} checked={activeKey === item.key} />
                <IconComp item={item} activeKey={activeKey} onHover={onHover} />
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
      localIcon: T.oneOfType([T.string, T.node]),
      key: T.string,
    })
  ).isRequired,
  activeKey: T.string.isRequired,
  onChange: T.func.isRequired,
  onHover: T.oneOfType([T.func, T.instanceOf(null)]),
}

IconSwitcher.defaultProps = {
  onHover: null,
}

export default React.memo(IconSwitcher)
