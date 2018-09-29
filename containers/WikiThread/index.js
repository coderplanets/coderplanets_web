/*
 *
 * WikiThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

import { PublishLabel, MarkDownRender } from '../../components'

import {
  Wrapper,
  LeftPart,
  LeftPadding,
  RightPart,
  RightPadding,
  PublishBtn,
} from './styles'

import Contributors from './Contributors'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:WikiThread')
/* eslint-enable no-unused-vars */

class WikiThreadContainer extends React.Component {
  componentWillMount() {
    const { wikiThread } = this.props
    logic.init(wikiThread)
  }

  render() {
    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <MarkDownRender body="## this is a wiki demo" />
        </LeftPart>
        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={debug}>
              <PublishLabel
                text="参与编辑"
                iconSrc={`${ICON_CMD}/github.svg`}
              />
            </PublishBtn>
            <Contributors />
          </React.Fragment>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('wikiThread'))(observer(WikiThreadContainer))
