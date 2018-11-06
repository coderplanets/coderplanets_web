/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Tabber from '../../components/Tabber'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

import { BannerContainer, TabberWrapper, BannerContentWrapper } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunitiesBanner')
/* eslint-enable no-unused-vars */

class CommunitiesBannerContainer extends React.Component {
  componentDidMount() {
    const { communitiesBanner } = this.props
    logic.init(communitiesBanner)
  }

  render() {
    const {
      communitiesBanner: { pagedCategoriesData, activeRaw },
    } = this.props
    return (
      <BannerContainer>
        <BannerContentWrapper>
          <h2>this is all communities</h2>
          {pagedCategoriesData ? (
            <TabberWrapper>
              <Tabber
                source={pagedCategoriesData.entries}
                active={activeRaw}
                onChange={logic.tabOnChange}
              />
            </TabberWrapper>
          ) : null}
        </BannerContentWrapper>
      </BannerContainer>
    )
  }
}

export default inject(storePlug('communitiesBanner'))(
  observer(CommunitiesBannerContainer)
)
