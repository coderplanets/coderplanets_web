/*
 *
 * Tabs
 *
 */

import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import { buildLog } from '@utils'

import { Wrapper, Nav, Ul, Li, SlipBar } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const Tabs = () => {
  const [active, setActive] = useState(0)

  console.log('offset: ', active)

  return (
    <Wrapper testid="tabs">
      <Nav>
        <Ul>
          <Li onClick={() => setActive(0)}>
            <span>Home</span>
          </Li>
          <Li onClick={() => setActive(1)}>
            <span>Archive</span>
          </Li>
          <Li onClick={() => setActive(2)}>
            <span>Analytics</span>
          </Li>
          <Li onClick={() => setActive(3)}>
            <span>Upload</span>
          </Li>
          <Li onClick={() => setActive(4)}>
            <span>Settings</span>
          </Li>
          <SlipBar active={`${active * 100}%`} />
        </Ul>
      </Nav>
    </Wrapper>
  )
}

Tabs.propTypes = {
  // https://www.npmjs.com/package/prop-types
  // attr: PropTypes.string,
}

Tabs.defaultProps = {
  // attr: 'tabs',
}

export default React.memo(Tabs)
