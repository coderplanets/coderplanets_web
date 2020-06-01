/*
 *
 * FavoritesCats
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import Modal from '@/components/Modal'
import SectionLabel from '@/components/SectionLabel'

import { AdderWrapper, AdderText, AdderIcon } from './styles'

import BoxView from './BoxView'
import Creator from './Creator'
import Updater from './Updater'
import Setter from './Setter'

import { useInit, onModalClose, changeViewTo } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:FavoritesCats')

const FavoritesCatsContainer = ({
  favoritesCats: store,
  onSelect,
  displayMode: displayModeProp,
}) => {
  useInit(store, displayModeProp)

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
  } = store

  const { entries } = pagedCategoriesData

  return (
    <React.Fragment>
      {displayMode === 'list' && (
        <SectionLabel
          title="收藏夹"
          iconSrc={`${ICON_CMD}/folder.svg`}
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
