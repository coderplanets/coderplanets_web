/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Tabber from '@components/Tabber'

import { makeDebugger, storePlug } from '@utils'
import {
  BannerContainer,
  BannerContentWrapper,
  ContentWrapper,
  TabberWrapper,
  // Title,
} from './styles'

import SearchBox from './SearchBox'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunitiesBanner')

class CommunitiesBannerContainer extends React.Component {
  constructor(props) {
    super(props)

    const { communitiesBanner } = props
    logic.init(communitiesBanner)
  }

  render() {
    const { communitiesBanner } = this.props
    const {
      pagedCategoriesData,
      activeTab,
      searchValue,
      isSearchMode,
      searching,
    } = communitiesBanner

    // debug('searchValue: ', searchValue)
    // debug('isSearchMode --> ', isSearchMode)

    return (
      <BannerContainer>
        <BannerContentWrapper>
          <ContentWrapper>
            <SearchBox
              onChange={logic.searchChange}
              value={searchValue}
              searching={searching}
            />
          </ContentWrapper>
          {!isSearchMode &&
            pagedCategoriesData && (
              <TabberWrapper>
                <Tabber
                  source={pagedCategoriesData.entries}
                  active={activeTab}
                  onChange={logic.tabOnChange}
                />
              </TabberWrapper>
            )}
        </BannerContentWrapper>
      </BannerContainer>
    )
  }
}

export default inject(storePlug('communitiesBanner'))(
  observer(CommunitiesBannerContainer)
)
