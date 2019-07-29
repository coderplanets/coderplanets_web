/*
 *
 * CheatSheetContent
 *
 */

import React from 'react'
import randomColor from 'randomcolor'

// TODO: remove Row, Col, Divider
import { Row, Col, Divider } from 'antd'

import { connectStore, uid, buildLog } from '@utils'
import { Entry, CheatsheetItem } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CheatSheetContent')

// TODO:  ramdo color is slow
const cheatsheetData = {
  langs: [
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'django', link: 'link' },
    { title: 'react', link: 'link' },
    { title: 'angular', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'django', link: 'link' },
    { title: 'react', link: 'link' },
    { title: 'angular', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
  ],
  framework: [
    { title: 'django', link: 'link' },
    { title: 'react', link: 'link' },
    { title: 'angular', link: 'link' },
    { title: 'vue', link: 'link' },
  ],
}

const Langs = ({ base }) => {
  //   const base = 'orange' // '#8363B4' //'#68808D'
  const { langs } = cheatsheetData
  const colors = randomColor({
    hue: base,
    luminosity: 'light',
    count: langs.length,
  })

  return (
    <Row>
      <Col span={1} />
      <Col span={22}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {langs.map((item, i) => (
            <CheatsheetItem key={uid.gen()} fg={colors[i]}>
              <Entry fg={colors[i]}>{item.title}</Entry>
            </CheatsheetItem>
          ))}
        </div>
      </Col>
    </Row>
  )
}

const CheatSheetContentContainer = ({ cheatSheetContent }) => {
  useInit(cheatSheetContent)

  return (
    <div>
      <Langs base="green" />
      <Divider>前端</Divider>
      <Langs base="yellow" />
      <Divider>后端</Divider>
      <Langs base="orange" />
      <Divider>后端</Divider>
      <Langs base="red" />
      <Divider>后端</Divider>
      <Langs base="pink" />
      <Divider>后端</Divider>
      <Langs base="blue" />
      <Divider>后端</Divider>
      <Langs base="purple" />
    </div>
  )
}

export default connectStore(CheatSheetContentContainer)
