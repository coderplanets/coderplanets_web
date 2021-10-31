import { FC, memo } from 'react'

import type { TWorks } from '@/spec'
import { cutRest } from '@/utils/helper'

import Linker from '@/widgets/Linker'
// import DownLoadInfo from './DownloadInfo'

import {
  Wrapper,
  Desc,
} from '../../../styles/right_sticker/works_sticker/get_me'

type TProps = {
  article: TWorks
}

const GetMe: FC<TProps> = ({ article }) => {
  const { homeLink, desc } = article

  return (
    <Wrapper>
      <Linker src={homeLink} right={10} />
      <Desc>{cutRest(desc, 100)}</Desc>
    </Wrapper>
  )
}

export default memo(GetMe)
