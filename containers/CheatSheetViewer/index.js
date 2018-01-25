/*
*
* CheatSheetViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

import Remarkable from 'remarkable'
import Masonry from 'react-masonry-component'
import Prism from 'mastani-codehighlight'
import shortid from 'shortid'
import { Row, Col } from 'antd'
import { CheatSheetLoading } from '../../components/LoadingEffects'

import { Button, NotFound } from '../../components'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

import { CheatSheetStyle, CardWrapper } from './styles'

// import code from './es7'

const debug = makeDebugger('C:CheatSheetViewer')

const md = new Remarkable()

const Cards = ({ cards }) =>
  cards.map(item => (
    <CardWrapper key={shortid.generate()}>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(item),
          }}
        />
      </div>
    </CardWrapper>
  ))

const CheatSheets = ({ source }) =>
  source.map(item => (
    <CheatSheetStyle key={shortid.generate()}>
      <div className="cheatsheet-body">
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(item.header),
          }}
        />
        <Masonry>
          <Cards cards={item.cards} />
        </Masonry>
      </div>
    </CheatSheetStyle>
  ))

const ParseError = ({ msg }) => {
  const errorMsg = `#### 解析出错!
 \`\`\`bash
    ${msg}
 \`\`\`

* 常见原因可嫩是\`分隔符\`错误使用了
* 请修改后重新尝试, 或查看范例 [示范文档](https://github.com/mydearxym/mastani-cheatsheets/blob/master/react.md)
    `
  return (
    <CheatSheetStyle>
      <div
        className="cheatsheet-body"
        style={{ marginTop: '3em' }}
        dangerouslySetInnerHTML={{
          __html: md.render(errorMsg),
        }}
      />
    </CheatSheetStyle>
  )
}

const renderContent = (source, state, errMsg) => {
  switch (state) {
    case 'init': {
      return <div>init la</div>
    }
    case 'loading': {
      return <CheatSheetLoading />
    }
    case '404': {
      return <NotFound />
    }
    case 'empty': {
      return <div>isEmpty</div>
    }
    case 'loaded': {
      return <CheatSheets source={source} />
    }
    case 'parse_error': {
      return <ParseError msg={errMsg} />
    }
    default:
      return <div>default</div>
  }
}

class CheatSheetViewerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.cheatsheetViewer)
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  componentWillUnmount() {
    logic.unInit()
  }

  render() {
    //    const data = logic.transMarkDownforRender(code)
    const { cheatsheetViewer } = this.props
    const { source, state, errMsg } = cheatsheetViewer

    return (
      <Row>
        <Row>
          <Button type="primary" onClick={logic.getData.bind(this, 'elixir')}>
            Elixir
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.getData.bind(this, 'go')}>
            go
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.getData.bind(this, 'react')}>
            react
          </Button>
          &nbsp;&nbsp;
          <Button
            type="primary"
            ghost
            onClick={logic.getData.bind(this, 'ruby')}
          >
            not found
          </Button>
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <div>{renderContent(source, state, errMsg)}</div>
          </Col>
          <Col span={1} />
        </Row>
      </Row>
    )
  }
}

export default inject(storeSelector('cheatsheetViewer'))(
  observer(CheatSheetViewerContainer)
)
