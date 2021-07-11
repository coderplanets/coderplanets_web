import { FC, memo } from 'react'

import type { TJob } from '@/spec'

import { cutRest } from '@/utils'
import DigestSentence from '@/components/DigestSentence'
import { Br } from '@/components/Common'

import Header from './Header'
import Footer from './Footer'

import { Wrapper } from '../styles/desktop_view'

type TProps = {
  entry: TJob
}

const DesktopView: FC<TProps> = ({ entry }) => {
  const { title, tags } = entry

  return (
    <Wrapper>
      <Header title={title} tags={tags} />
      <Br top={15} />
      <DigestSentence top={5} bottom={15} onPreview={() => console.log}>
        {cutRest(
          '我是一家很酷的团队, 我是一家很酷的团队, 我是一家很酷的团队,我是一家很酷的团队, 我是一家很酷的团队, 我是一家很酷的团队',
          100,
        )}
      </DigestSentence>
      <Br top={10} />
      <div>图片列表，可预览</div>
      <Br top={20} />
      <Footer />
    </Wrapper>
  )
}

export default memo(DesktopView)
