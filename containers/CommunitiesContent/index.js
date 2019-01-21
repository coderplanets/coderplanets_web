/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Pagi from 'components/Pagi'
import { makeDebugger, storePlug } from 'utils'
import CommunityCards from './CommunityCards'

import { Wrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunitiesContent')

class CommunitiesContentContainer extends React.Component {
  constructor(props) {
    super(props)

    const { communitiesContent } = props
    logic.init(communitiesContent)
  }

  render() {
    const { communitiesContent } = this.props
    const { pagedCommunitiesData } = communitiesContent

    return (
      <Wrapper>
        {pagedCommunitiesData ? (
          <React.Fragment>
            <CommunityCards
              entries={pagedCommunitiesData.entries}
              restProps={{ ...communitiesContent }}
            />
            <Pagi
              left="-10px"
              pageNumber={pagedCommunitiesData.pageNumber}
              pageSize={pagedCommunitiesData.pageSize}
              totalCount={pagedCommunitiesData.totalCount}
              onChange={logic.pageChange}
            />
          </React.Fragment>
        ) : null}
      </Wrapper>
    )
  }
}

export default inject(storePlug('communitiesContent'))(
  observer(CommunitiesContentContainer)
)
