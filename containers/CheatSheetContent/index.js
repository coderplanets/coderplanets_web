/*
 *
 * CheatSheetContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import randomColor from 'randomcolor'
// TODO: remove Row, Col, Divider
import { Row, Col, Divider } from 'antd'
// import Link from 'next/link'

import { Entry, CheatsheetItem } from './styles'

import { uid, makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

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

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CheatSheetContent')
/* eslint-enable no-unused-vars */

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

class CheatSheetContentContainer extends React.Component {
  constructor(props) {
    super(props)

    const { cheatSheetContent } = props
    logic.init(cheatSheetContent)
  }

  render() {
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
}

export default inject(storePlug('cheatSheetContent'))(
  observer(CheatSheetContentContainer)
)
