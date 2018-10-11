/*
 *
 * FavoritesCats
 *
 */

import React from 'react'
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
    const { favoritesCats } = this.props
    logic.init(favoritesCats)
  }

  // lists(box view, modal view), setter, creator and updater
  render() {
    const { favoritesCats } = this.props
    const {
      showModal,
      showUpdater,
      showCreator,
      showSetter,
      editCategoryData,
      pagedCategoriesData,
    } = favoritesCats

    const { entries, totalCount } = pagedCategoriesData
    return (
      <div>
        <SectionLabel
          title="收藏夹"
          iconSrc={`${ICON_CMD}/folder.svg`}
          desc={`当前共有收藏夹 ${totalCount} 个。`}
          withAdder
          onAdd={logic.openCreator}
          adderText="创建"
        />
        <Modal
          width="420px"
          show={showModal}
          showCloseBtn
          onClose={logic.onModalClose}
        >
          <Setter show={showModal && showSetter} entries={entries} />
          <Creator data={editCategoryData} show={showModal && showCreator} />
          <Updater data={editCategoryData} show={showModal && showUpdater} />
        </Modal>
        <BoxView
          data={pagedCategoriesData}
          onEdit={logic.openUpdater}
          onPageChange={logic.loadCategories}
        />
      </div>
    )
  }
}

export default inject(storePlug('favoritesCats'))(
  observer(FavoritesCatsContainer)
)
