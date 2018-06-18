/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Tabs } from '../../components'

import { makeDebugger, Trans } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const { TabPane } = Tabs

const Tabber = ({ source, active, onChange }) => {
  const tabitems = R.values(source)
  //   debug('tabitems: ', tabitems)
  //   <Tabs onChange={onChange} activeKey={'Js--jobs'}>
  return (
    <Tabs onChange={onChange} activeKey={active}>
      {tabitems.map(item => (
        <TabPane tab={Trans(item.title)} key={item.title} />
      ))}
    </Tabs>
  )
}

Tabber.propTypes = {
  // https://www.npmjs.com/package/prop-types
  onChange: PropTypes.func.isRequired,
  source: PropTypes.array.isRequired,
  active: PropTypes.string,
}

Tabber.defaultProps = {
  active: 'posts',
}

export default Tabber
