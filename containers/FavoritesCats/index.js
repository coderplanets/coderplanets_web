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

import { AdderWrapper, AdderText, AdderIcon } from './styles'

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
  componentDidMount() {
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
            addonNode={
              <AdderWrapper onClick={logic.changeViewTo.bind(this, 'creator')}>
                <AdderIcon src={`${ICON_CMD}/add_circle.svg`} />
                <AdderText>创建</AdderText>
              </AdderWrapper>
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
          />
          <Creator data={editCategoryData} show={isCreatorView} />
          <Updater data={editCategoryData} show={isUpdaterView} />
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
