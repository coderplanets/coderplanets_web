//

/*
 *
 * CollectionFolder
 *
 */

import { FC, Fragment } from 'react'
import { isMobile } from 'react-device-detect'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { ICON_CMD } from '@/config'

import Modal from '@/widgets/Modal'
import SectionLabel from '@/widgets/SectionLabel'

import type { TStore } from './store'
import Creator from './Creator'
import Updater from './Updater'
import Setter from './Setter'

import { Wrapper, AdderWrapper, AdderText, AdderIcon } from './styles'
import { useInit, onModalClose, changeViewTo } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CollectionFolder')

type TProps = {
  collectionFolder?: TStore
  testid?: string
  onSelect?: () => void
}

const CollectionFolderContainer: FC<TProps> = ({
  collectionFolder: store,
  testid = 'collection-folder',
  onSelect = log,
}) => {
  useInit(store, isMobile)

  const {
    viewingArticle,
    displayMode,
    isCreatorView,
    isUpdaterView,
    isSetterView,
    showModal,
    editCategoryData,
    pagedCategoriesData,
    isSelfViewing,
  } = store

  const { entries } = pagedCategoriesData

  if (isMobile) {
    return (
      <Wrapper>
        <Setter
          // entries={entries}
          show={isSetterView}
          article={viewingArticle}
          selectedId="1"
        />
        {/* <Creator data={editCategoryData} show={isCreatorView} />
        <Updater data={editCategoryData} show={isUpdaterView} /> */}
      </Wrapper>
    )
  }

  return (
    <Fragment>
      {displayMode === 'list' && (
        <SectionLabel
          title="收藏夹"
          iconSrc={`${ICON_CMD}/folder.svg`}
          addonNode={
            <>
              {isSelfViewing && (
                <AdderWrapper onClick={changeViewTo('creator')}>
                  <AdderIcon src={`${ICON_CMD}/add_circle.svg`} />
                  <AdderText>创建</AdderText>
                </AdderWrapper>
              )}
            </>
          }
        />
      )}
      <Modal width="500px" show={showModal} showCloseBtn onClose={onModalClose}>
        <Wrapper>
          <Setter
            // entries={entries}
            show={isSetterView}
            article={viewingArticle}
            selectedId="1"
          />
          <Creator data={editCategoryData} show={isCreatorView} />
          <Updater data={editCategoryData} show={isUpdaterView} />
        </Wrapper>
      </Modal>
    </Fragment>
  )
}

export default bond(CollectionFolderContainer, 'collectionFolder') as FC<TProps>
