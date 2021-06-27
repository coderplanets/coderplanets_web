import { FC, useEffect, useRef, memo } from 'react'

import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'
import { Wrapper } from '../styles/content'

type TProps = {
  visible: boolean
  type: string // TODO:
  attachment: any // TODO:
  attUser: any // TODO:
}

const Content: FC<TProps> = ({ visible, type, attachment, attUser }) => {
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
      <CustomScroller direction="vertical" height="100vh" shadowSize="small">
        <div>{renderContent(type, attachment, attUser)}</div>
      </CustomScroller>
    </Wrapper>
  )
}

export default memo(Content)
