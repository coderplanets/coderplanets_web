/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Tabs } from 'antd'

import { ICON_CMD } from '../../config'
import { LableWrapper, Icon } from './styles'

import { makeDebugger, Trans, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const { TabPane } = Tabs

const supportIcons = [
  'post',
  'repo',
  'user',
  'video',
  'wiki',
  'job',
  'cheatsheet',
]
const TabIcon = ({ raw, active }) => {
  if (R.contains(raw, supportIcons)) {
    return <Icon src={`${ICON_CMD}/tab_${raw}.svg`} active={raw === active} />
  }
  return <Icon src={`${ICON_CMD}/tab_list.svg`} active={raw === active} />
}

const Tabber = ({ source, active, onChange }) => {
  const tabitems = R.values(source)

  return (
    <Tabs onChange={onChange} activeKey={active}>
      {tabitems.map(item => (
        <TabPane
          tab={
            <LableWrapper>
              <TabIcon raw={item.raw} active={active} />
              {Trans(item.title)}
            </LableWrapper>
          }
          key={item.raw}
        />
      ))}
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
