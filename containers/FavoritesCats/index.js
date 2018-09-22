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

const categories = [
  {
    title: '前端框架',
    desc: 'this is a desc',
    private: 'is private!',
  },
  {
    title: '后端技术',
    desc: 'this is a desc',
    private: 'is private!',
  },
]

class FavoritesCatsContainer extends React.Component {
  componentWillMount() {
    const { favoritesCats } = this.props
    logic.init(favoritesCats)
  }

  // lists(box view, modal view), setter, creator and updater
  render() {
    const { favoritesCats } = this.props
    const { showModal, showUpdater, showCreator, showSetter } = favoritesCats

    return (
      <div>
        <SectionLabel
          title="收藏夹"
          iconSrc={`${ICON_CMD}/folder.svg`}
          desc="共有内容 xx 条, 最后更新时间 xxx"
          withAdder
          onAdd={logic.onAdd}
        />
        <Modal
          width="420px"
          show={showModal}
          showCloseBtn
          onClose={logic.onModalClose}
        >
          <Setter show={showModal && showSetter} entries={categories} />
          <Creator show={showModal && showCreator} />
          <Updater show={showModal && showUpdater} />
        </Modal>
        <BoxView entries={categories} onEdit={logic.onEdit} />
      </div>
    )
  }
}

export default inject(storePlug('favoritesCats'))(
  observer(FavoritesCatsContainer)
)
