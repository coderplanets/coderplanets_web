/*
 *
 * FavoritesCats
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

import { Modal, SectionLabel } from '../../components'
import BoxView from './BoxView'
import Creator from './Creator'
import Updater from './Updater'
import Setter from './Setter'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:FavoritesCats')
/* eslint-enable no-unused-vars */

class FavoritesCatsContainer extends React.Component {
  componentWillMount() {
    const { favoritesCats, displayMode } = this.props
    logic.init(favoritesCats, displayMode)
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
    } = favoritesCats

    const { entries, totalCount } = pagedCategoriesData

    return (
      <React.Fragment>
        {displayMode === 'list' ? (
          <SectionLabel
            title="收藏夹"
            iconSrc={`${ICON_CMD}/folder.svg`}
            desc={`当前共有收藏夹 ${totalCount} 个。`}
            withAdder
            onAdd={logic.changeViewTo.bind(this, 'creator')}
            adderText="创建"
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
            onCreateCat={logic.onSetterCreateCat}
            onSet={logic.setContent}
            onUnset={logic.unSetContent}
          />
          <Creator data={editCategoryData} show={isCreatorView} />
          <Updater data={editCategoryData} show={isUpdaterView} />
        </Modal>
        {displayMode === 'list' ? (
          <BoxView
            data={pagedCategoriesData}
            onEdit={logic.changeViewTo.bind(this, 'updater')}
            onPageChange={logic.loadCategories}
            onSelect={onSelect}
          />
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
