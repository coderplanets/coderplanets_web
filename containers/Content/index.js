/*
*
* Content
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import randomColor from 'randomcolor'
import shortid from 'shortid'
import { Row, Col, Divider } from 'antd'

import { makeDebugger, storeSelector } from '../../utils'
import PostsPaper from '../PostsPaper'
// import TutsViewer from '../TutsViewer'
import MapViewer from '../MapViewer'
// import JobsViewer from '../JobsViewer'

import CheatSheetViewer from '../CheatSheetViewer'
import * as logic from './logic'

import { Wrapper, Entry, CheatsheetItem } from './styles'

const debug = makeDebugger('C:Content')

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
            <CheatsheetItem key={shortid.generate()} fg={colors[i]}>
              <Entry fg={colors[i]}>{item.title}</Entry>
            </CheatsheetItem>
          ))}
        </div>
      </Col>
    </Row>
  )
}

const CheatSheetBody = () => {
  /*
  <CategoryWrapper>
    {colors.map(color => (
       <Category key={shortid.generate()} bg={color}>
         hello
       </Category>
     ))}
  </CategoryWrapper>
 */

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

const CommonComunity = ({ curRoute }) => {
  const { subQuery } = curRoute
  debug('subQuery: ', subQuery)

  switch (subQuery) {
    case 'posts': {
      return <PostsPaper />
    }
    case 'news': {
      return <PostsPaper />
    }
    case 'tuts': {
      return <PostsPaper />
    }
    case 'map': {
      return <MapViewer />
    }
    case 'meetups': {
      return <PostsPaper />
    }
    case 'users': {
      return <div>users</div>
    }
    case 'videos': {
      return <PostsPaper />
    }
    case 'jobs': {
      return <PostsPaper />
    }
    case 'cheatsheet': {
      return <CheatSheetViewer />
    }
    default: {
      return <div>posts</div>
    }
  }
}

const renderContent = curRoute => {
  const { mainQuery } = curRoute

  console.log('curRoute: ', curRoute)
  switch (mainQuery) {
    case 'cheatsheet': {
      return <CheatSheetBody />
    }
    case 'communities': {
      return <div>communities</div>
    }
    default: {
      return <CommonComunity curRoute={curRoute} />
    }
  }
}

class ContentContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.content)
  }

  render() {
    const { curRoute } = this.props.content
    //    debug('curRoute: ', curRoute)
    return <Wrapper>{renderContent(curRoute)}</Wrapper>
  }
}

export default inject(storeSelector('content'))(observer(ContentContainer))
