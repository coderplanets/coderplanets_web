/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Tabber from '../../components/Tabber'

import {
  BannerContainer,
  BannerContentWrapper,
  ContentWrapper,
  TabberWrapper,
  Title,
  Desc,
  IssueLink,
} from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunitiesBanner')
/* eslint-enable no-unused-vars */

class CommunitiesBannerContainer extends React.Component {
  constructor(props) {
    super(props)

    const { communitiesBanner } = props
    logic.init(communitiesBanner)
  }

  // https://github.com/coderplanets/coderplanets_web/issues/265

  render() {
    const {
      communitiesBanner: { pagedCategoriesData, activeTab },
    } = this.props
    debug('activeRaw: ', activeTab)

    return (
      <BannerContainer>
        <BannerContentWrapper>
          <ContentWrapper>
            <Title>寻找你感兴趣的社区</Title>
            <Desc>
              若没有你感兴趣的社区, 你可以
              <IssueLink
                href="https://github.com/coderplanets/coderplanets_web/issues/280"
                rel="noopener noreferrer"
                target="_blank"
              >
                参与创建
              </IssueLink>
              !
            </Desc>
          </ContentWrapper>
          {pagedCategoriesData ? (
            <TabberWrapper>
              <Tabber
                source={pagedCategoriesData.entries}
                active={activeTab}
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
