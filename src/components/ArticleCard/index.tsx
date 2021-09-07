import { FC, memo } from 'react'

import type { TArticle, TThread } from '@/spec'
import { SIZE, THREAD, EVENT } from '@/constant'

import { cutRest, send } from '@/utils/helper'
import DigestSentence from '@/components/DigestSentence'
import { Br, SpaceGrow } from '@/components/Common'
import ArticleImgWindow from '@/components/ArticleImgWindow'

import Header from './Header'
import Footer from './Footer'

import { Wrapper } from './styles'

export type TProps = {
  data: TArticle
  thread?: TThread
}
const fakeDigest =
  '网络监测数据显示，从 7 月 12 日开始古巴限制了社交媒体和消息应用，此举被认为旨在限制信息流动。古巴上周末爆发了罕见的大规模反政府抗议。受到干扰的通讯平台包括了 WhatsApp、Facebook、Instagram 和部分 Telegram 服务。VPN 服务可以绕过这一干扰。古巴的反政府抗议与经济困难，疫苗短缺等问题有关。'

const ArticleCard: FC<TProps> = ({ data, thread = THREAD.JOB }) => {
  return (
    <Wrapper>
      <Header data={data} thread={thread} />
      <Br top={8} />
      <DigestSentence
        top={5}
        bottom={16}
        size={SIZE.MEDIUM}
        onPreview={() => send(EVENT.PREVIEW_ARTICLE, { article: data })}
      >
        {cutRest(fakeDigest, 150)}
      </DigestSentence>
      <Br top={6} />
      <ArticleImgWindow />
      <Br top={18} />
      <SpaceGrow />
      <Footer data={data} />
    </Wrapper>
  )
}

export default memo(ArticleCard)
