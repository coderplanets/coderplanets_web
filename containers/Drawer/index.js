/*
*
* Drawer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger } from '../../utils/functions'
import * as logic from './logic'
import {
  DrawerOverlay,
  DrawerWrapper,
  DrawerCloser,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Closer,
  CloserInner,
} from './styles'

const debug = makeDebugger('C:Drawer')

const CloseBtn = () => (
  <DrawerCloser onClick={logic.closeDrawer}>
    <Closer>
      <CloserInner />
    </Closer>
  </DrawerCloser>
)

const selector = ({ store }) => ({
  store: store.drawer,
})

class DrawerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.store)
  }

  render() {
    const { visible } = this.props.store
    //     debug('visiblei: ', visible)
    return (
      <div>
        <DrawerOverlay visible={visible} onClick={logic.closeDrawer} />
        <DrawerWrapper visible={visible}>
          <CloseBtn />
          <DrawerContent>
            <DrawerHeader>Drawer header</DrawerHeader>
            <DrawerBody>Drawer body</DrawerBody>
          </DrawerContent>
        </DrawerWrapper>
      </div>
    )
  }
}

export default inject(selector)(observer(DrawerContainer))
