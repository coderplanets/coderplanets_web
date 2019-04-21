/*
 *
 * CommunitySetter
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import Modal from 'components/Modal'
import { ArticleContentLoading } from 'components/LoadingEffects'

import SearchBar from './SearchBar'
import Message from './Message'
import CommunitiesList from './CommunitiesList'

import { Wrapper, ContentWrapper, Divider } from './styles'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunitySetter')

class CommunitySetterContainer extends React.Component {
  componentDidMount() {
    const { communitySetter } = this.props
    logic.init(communitySetter)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { communitySetter } = this.props
    const {
      visible,
      curBelongIds,
      pagedCommunitiesData,
      searchValue,
    } = communitySetter

    return (
      <Modal width="700px" show={visible} showCloseBtn onClose={logic.onClose}>
        <Wrapper>
          <ContentWrapper>
            <SearchBar value={searchValue} />
          </ContentWrapper>
          <Divider />
          <Message />
          <ContentWrapper>
            {pagedCommunitiesData ? (
              <CommunitiesList
                data={pagedCommunitiesData}
                curBelongIds={curBelongIds}
              />
            ) : (
              <ArticleContentLoading />
            )}
          </ContentWrapper>
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('communitySetter'))(
  observer(CommunitySetterContainer)
)
