/*
 *
 * CheatsheetThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Prism from 'mastani-codehighlight'

import { Wrapper } from './styles'

// import { NotFound, CheatSheetLoading } from '../../components'

import Cheatsheet from './Cheatsheet'
import Note from './Note'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CheatsheetThread')
/* eslint-enable no-unused-vars */

/*
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
      return <Cheatsheet source={source} />
    }
    case 'parse_error': {
      return <h3>parse error</h3>
    }
    default:
      return <div>default</div>
  }
}
*/

class CheatsheetThreadContainer extends React.Component {
  componentWillMount() {
    const { cheatsheetThread } = this.props
    logic.init(cheatsheetThread)
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const { cheatsheetThread } = this.props
    const { sourceData /* state, errMsg */ } = cheatsheetThread

    // console.log('sourceData --> ', sourceData)
    // <div>{renderContent(source, state, errMsg)}</div>

    // <div>{renderContent(sourceData, state, errMsg)}</div>

    return (
      <Wrapper>
        <Cheatsheet source={sourceData} />
        <Note />
      </Wrapper>
    )
  }
}

export default inject(storePlug('cheatsheetThread'))(
  observer(CheatsheetThreadContainer)
)
