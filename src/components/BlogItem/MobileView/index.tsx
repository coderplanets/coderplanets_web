import { FC, memo } from 'react'

import type { TBlog, TAccount } from '@/spec'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from '../styles/mobile_view'

type TProps = {
  entry: TBlog
  onPreview?: (obj: TBlog) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const MobileView: FC<TProps> = ({ entry, onPreview, onAuthorSelect }) => {
  return (
    <Wrapper>
      <Header item={entry} onAuthorSelect={onAuthorSelect} />
      <Body item={entry} onPreview={onPreview} />
      <Footer item={entry} />
    </Wrapper>
  )
}

export default memo(MobileView)
