/*
 *
 * FavoritesCats
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Modal from 'components/Modal'
import SectionLabel from 'components/SectionLabel'
import { ICON_CMD } from 'config'

import { makeDebugger, storePlug } from 'utils'
import { AdderWrapper, AdderText, AdderIcon } from './styles'

import BoxView from './BoxView'
import Creator from './Creator'
import Updater from './Updater'
import Setter from './Setter'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:FavoritesCats')

class FavoritesCatsContainer extends React.Component {
  componentDidMount() {
    const { favoritesCats, displayMode } = this.props
    logic.init(favoritesCats, displayMode)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  // lists(box view, modal view), setter, creator and updater
  render() {
    const { favoritesCats, onSelect } = this.props

    const {
      displayMode,
      viewingData,

      isCreatorView,
      isUpdaterView,
      isSetterView,
      showModal,
      editCategoryData,
      pagedCategoriesData,
      isSelfViewing,
      hasLockAuth,
    } = favoritesCats

    const { entries, totalCount } = pagedCategoriesData

    return (
      <React.Fragment>
        {displayMode === 'list' ? (
          <SectionLabel
            title="收藏夹"
            iconSrc={`${ICON_CMD}/folder.svg`}
            desc={`收藏夹共 ${totalCount} 个。`}
            addonNode={
              <React.Fragment>
                {isSelfViewing ? (
                  <AdderWrapper
                    onClick={logic.changeViewTo.bind(this, 'creator')}
                  >
                    <AdderIcon src={`${ICON_CMD}/add_circle.svg`} />
                    <AdderText>创建</AdderText>
                  </AdderWrapper>
                ) : null}
              </React.Fragment>
            }
          />
        ) : null}
        <Modal
          width="420px"
          show={showModal}
          showCloseBtn
          onClose={logic.onModalClose}
        >
          <Setter
            entries={entries}
            show={isSetterView}
            selectedId={viewingData.favoritedCategoryId}
            hasLockAuth={hasLockAuth}
          />
          <Creator
            data={editCategoryData}
            show={isCreatorView}
            hasLockAuth={hasLockAuth}
          />
          <Updater
            data={editCategoryData}
            show={isUpdaterView}
            hasLockAuth={hasLockAuth}
          />
        </Modal>
        {displayMode === 'list' ? (
          <BoxView data={pagedCategoriesData} onSelect={onSelect} />
        ) : null}
      </React.Fragment>
    )
  }
}

FavoritesCatsContainer.propTypes = {
  onSelect: PropTypes.func,
  favoritesCats: PropTypes.any.isRequired,
  displayMode: PropTypes.oneOf(['list', 'hide']),
}

FavoritesCatsContainer.defaultProps = {
  onSelect: debug,
  displayMode: 'hide',
}

export default inject(storePlug('favoritesCats'))(
  observer(FavoritesCatsContainer)
)
