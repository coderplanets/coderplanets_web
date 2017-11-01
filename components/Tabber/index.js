/*
 *
 * Tabber
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Tabs } from 'antd'

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const { TabPane } = Tabs

const translator = {
  map: '地图',
  posts: '帖子',
  news: '动态',
  meetups: 'meetups',
  users: '用户',
  videos: '视频',
  tuts: '教程',
  jobs: '招聘',
}

const Tabber = ({ source, onChange }) => {
  const tabitems = R.values(source)
  return (
    <Tabs onChange={onChange}>
      {tabitems.map(item => (
        <TabPane tab={translator[item.title] || '??'} key={item.raw} />
      ))}
    </Tabs>
  )
}

Tabber.propTypes = {
  // https://www.npmjs.com/package/prop-types
  onChange: PropTypes.func.isRequired,
}

Tabber.defaultProps = {}

export default Tabber
