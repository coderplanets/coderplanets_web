/*
 *
 * FavoritesCats
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'

import Modal from '@components/Modal'
import SectionLabel from '@components/SectionLabel'

import { AdderWrapper, AdderText, AdderIcon } from './styles'

import BoxView from './BoxView'
import Creator from './Creator'
import Updater from './Updater'
import Setter from './Setter'

import { useInit, onModalClose, changeViewTo } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:FavoritesCats')

const FavoritesCatsContainer = ({
  favoritesCats,
  onSelect,
  displayMode: displayModeProp,
}) => {
  useInit(favoritesCats, displayModeProp)

  const {
    viewingData,
    displayMode,
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
      {displayMode === 'list' && (
        <SectionLabel
          title="收藏夹"
          iconSrc={`${ICON_CMD}/folder.svg`}
          desc={`收藏夹共 ${totalCount} 个。`}
          addonNode={
            <React.Fragment>
              {isSelfViewing && (
                <AdderWrapper onClick={changeViewTo('creator')}>
                  <AdderIcon src={`${ICON_CMD}/add_circle.svg`} />
                  <AdderText>创建</AdderText>
                </AdderWrapper>
              )}
            </React.Fragment>
          }
        />
      )}
      <Modal width="420px" show={showModal} showCloseBtn onClose={onModalClose}>
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
      {displayMode === 'list' && (
        <BoxView data={pagedCategoriesData} onSelect={onSelect} />
      )}
    </React.Fragment>
  )
}

/*
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
        {displayMode === 'list' && (
          <SectionLabel
            title="收藏夹"
            iconSrc={`${ICON_CMD}/folder.svg`}
            desc={`收藏夹共 ${totalCount} 个。`}
            addonNode={
              <React.Fragment>
                {isSelfViewing && (
                  <AdderWrapper
                    onClick={logic.changeViewTo.bind(this, 'creator')}
                  >
                    <AdderIcon src={`${ICON_CMD}/add_circle.svg`} />
                    <AdderText>创建</AdderText>
                  </AdderWrapper>
                )}
              </React.Fragment>
            }
          />
        )}
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
        {displayMode === 'list' && (
          <BoxView data={pagedCategoriesData} onSelect={onSelect} />
        )}
      </React.Fragment>
    )
  }
}
*/

FavoritesCatsContainer.propTypes = {
  onSelect: T.func,
  favoritesCats: T.any.isRequired,
  displayMode: T.oneOf(['list', 'hide']),
}

FavoritesCatsContainer.defaultProps = {
  onSelect: log,
  displayMode: 'hide',
}

export default connectStore(FavoritesCatsContainer)
