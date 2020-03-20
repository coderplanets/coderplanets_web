/*
 *
 * Tabs
 *
 */

import React, { useState, useCallback } from 'react'
import T from 'prop-types'

import { buildLog, uid } from '@utils'

import { Wrapper, Nav, Ul, Li, SlipBar, RealBar } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const defaultItems = [
  'home',
  'Archive and long',
  'Analytics',
  'Upload',
  'Settings',
]

const Tabs = ({ onChange, items }) => {
  const [active, setActive] = useState(0)
  const [slipWidth, setSlipWidth] = useState(50)

  // console.log('offset: ', active)
  console.log('slipWidth -> ', slipWidth)

  const handleItemClick = useCallback(
    (index, e) => {
      e.preventDefault()
      console.log('e: ', e.target)
      setSlipWidth(e.target.offsetWidth)
      setActive(index)
      onChange()
    },
    [setSlipWidth, setActive, onChange]
  )

  return (
    <Wrapper testid="tabs">
      <Nav>
        <Ul>
          {items.map((item, index) => (
            <Li key={uid.gen()}>
              <span onClick={e => handleItemClick(index, e)}>{item}</span>
            </Li>
          ))}
          <SlipBar active={`${active * 100}%`} width={`${100 / items.length}%`}>
            <RealBar width={`${slipWidth}px`} />
          </SlipBar>
        </Ul>
      </Nav>
    </Wrapper>
  )
}

Tabs.propTypes = {
  items: T.arrayOf(T.any),
  onChange: T.func,
}

Tabs.defaultProps = {
  items: defaultItems,
  onChange: log,
}

export default React.memo(Tabs)
