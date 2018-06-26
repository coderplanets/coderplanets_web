/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Tabs } from '..'

import { makeDebugger, Trans, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const { TabPane } = Tabs

const Tabber = ({ source, active, onChange }) => {
  const tabitems = R.values(source)

  return (
    <Tabs onChange={onChange} activeKey={active}>
      {tabitems.map(item => <TabPane tab={Trans(item.title)} key={item.raw} />)}
    </Tabs>
  )
}

Tabber.propTypes = {
  // https://www.npmjs.com/package/prop-types
  onChange: PropTypes.func,
  source: PropTypes.array.isRequired,
  active: PropTypes.string,
}

Tabber.defaultProps = {
  active: THREAD.POST,
  onChange: debug,
}

export default Tabber
