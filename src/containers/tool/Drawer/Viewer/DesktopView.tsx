import { Fragment, FC, ReactNode, memo } from 'react'

import { ANCHOR } from '@/constant'

import type { TSwipeOption, TArticleNavi } from '../spec'
import AddOn from '../AddOn'

import { DrawerOverlay, DrawerWrapper, DrawerContent } from '../styles'
import { closeDrawer } from '../logic'

type TProps = {
  testid?: string
  options: TSwipeOption
  visible: boolean
  rightOffset: string
  type: string
  articleNavi?: TArticleNavi
  children: ReactNode
}

const DesktopView: FC<TProps> = ({
  testid = 'drawer-sidebar-panel',
  options,
  visible,
  rightOffset,
  type,
  articleNavi,
  children,
}) => {
  return (
    <Fragment>
      <DrawerOverlay
        visible={visible}
        onClick={() => closeDrawer()}
        className={ANCHOR.GLOBAL_BLUR_CLASS}
      />
      <DrawerWrapper
        testid={testid}
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={false}
        options={options}
      >
        <AddOn type={type} articleNavi={articleNavi} />
        <DrawerContent>{children}</DrawerContent>
      </DrawerWrapper>
    </Fragment>
  )
}

export default memo(DesktopView)
