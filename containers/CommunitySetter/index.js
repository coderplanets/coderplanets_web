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
import CommunitiesList from './CommunitiesList'

import { Wrapper } from './styles'

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
          <SearchBar value={searchValue} />
          {pagedCommunitiesData ? (
            <CommunitiesList
              data={pagedCommunitiesData}
              curBelongIds={curBelongIds}
            />
          ) : (
            <ArticleContentLoading />
          )}
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('communitySetter'))(
  observer(CommunitySetterContainer)
)
