import { FC, useEffect, useRef, memo } from 'react'

import { DRAWER_SCROLLER } from '@/constant'
import CustomScroller from '@/widgets/CustomScroller'

import renderContent from './renderContent'
import { Wrapper } from '../styles/content'
import { isViewerMode } from '../styles/metrics'

type TProps = {
  visible: boolean
  type: string // TODO:
  attUser: any // TODO:
  userListerType: string
}

const Content: FC<TProps> = ({ visible, type, attUser, userListerType }) => {
  const ref = useRef(null)

  /*
   * reset when content visible
   * scroll to top always
   */
  useEffect(() => {
    if (visible && ref?.current) {
      ref.current.scrollIntoView()
    }
  }, [visible, ref])

  if (isViewerMode(type)) {
    return (
      <Wrapper>
        <CustomScroller
          instanceKey={DRAWER_SCROLLER}
          direction="vertical"
          height="100vh"
          barSize="medium"
          showShadow={false}
        >
          {renderContent(type, attUser, userListerType)}
        </CustomScroller>
      </Wrapper>
    )
  }

  return <Wrapper>{renderContent(type, attUser, userListerType)}</Wrapper>
}

export default memo(Content)
