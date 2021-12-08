import { FC, memo } from 'react'

import type { TPost, TAccount } from '@/spec'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from '../styles/mobile_view'

type TProps = {
  entry: TPost
  onAuthorSelect?: (obj: TAccount) => void
}

const MobileView: FC<TProps> = ({ entry, onAuthorSelect }) => {
  return (
    <Wrapper>
      <Header item={entry} onAuthorSelect={onAuthorSelect} />
      <Body item={entry} />
      <Footer item={entry} />
    </Wrapper>
  )
}

export default memo(MobileView)
