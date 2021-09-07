import { FC, useEffect, useRef, memo } from 'react'

import { DRAWER_SCROLLER } from '@/constant'
import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'
import { Wrapper } from '../styles/content'

type TProps = {
  visible: boolean
  type: string // TODO:
  attUser: any // TODO:
}

const Content: FC<TProps> = ({ visible, type, attUser }) => {
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

  return (
    <Wrapper>
      <CustomScroller
        instanceKey={DRAWER_SCROLLER}
        direction="vertical"
        height="100vh"
        shadowSize="small"
        showShadow={false}
      >
        {renderContent(type, attUser)}
      </CustomScroller>
    </Wrapper>
  )
}

export default memo(Content)
