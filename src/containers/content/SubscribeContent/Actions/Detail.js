import React from 'react'

import { ICON_CMD } from '@/config'

import useCopyToClipboard from 'react-use/lib/useCopyToClipboard'
import EmailSubscriber from '@/widgets/EmailSubscriber'
import { Br, SpaceGrow } from '@/widgets/Common'
// TODO: extract to Email Subscriber

import { Wrapper, Title, Desc, Dot, CopyIcon } from '../styles/actions/detail'
import { notifyCopy } from '../logic'

const Detail = () => {
  const [copyState, copyToClipboard] = useCopyToClipboard()

  const rss = 'https://coderplanets.com/rss/javascript'
  return (
    <Wrapper>
      <Title>
        <Dot /> Email 订阅
      </Title>
      <Desc>
        <EmailSubscriber
          activeByDefault
          title="社区订阅"
          desc="社区订阅注意事项。"
        />
      </Desc>
      <Br top={50} />
      <Title>
        <Dot />
        RSS 订阅
        <SpaceGrow />
        <div
          onClick={() => {
            copyToClipboard(rss)
            notifyCopy(copyState)
          }}
        >
          <CopyIcon src={`${ICON_CMD}/copy-to-clipboard.svg`} />
        </div>
      </Title>
      <Desc>{rss}</Desc>
    </Wrapper>
  )
}

export default Detail
