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
  WikiWrapper,
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
    const { wikiThread } = this.props
    const { wikiData } = wikiThread

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <WikiWrapper>
            <MarkDownRender body={wikiData.readme} />
          </WikiWrapper>
        </LeftPart>
        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={debug}>
              <PublishLabel
                text="参与编辑"
                iconSrc={`${ICON_CMD}/github.svg`}
              />
            </PublishBtn>
            <Contributors
              users={wikiData.contributors}
              views={wikiData.views}
              lastSync={wikiData.lastSync}
            />
          </React.Fragment>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('wikiThread'))(observer(WikiThreadContainer))
