import { FC, memo } from 'react'

import type { TWorks } from '@/spec'
import { cutRest } from '@/utils/helper'

import Linker from '@/widgets/Linker'
// import DownLoadInfo from './DownloadInfo'

import { Wrapper, Desc } from '../styles/about'

type TProps = {
  article: TWorks
}

const About: FC<TProps> = ({ article }) => {
  const { homeLink, desc } = article

  return (
    <Wrapper>
      <Linker src={homeLink} right={10} left={-3} />
      <Desc>{cutRest(desc, 100)}</Desc>
    </Wrapper>
  )
}

export default memo(About)
