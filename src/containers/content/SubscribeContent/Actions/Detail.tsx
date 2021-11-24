import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'

import useCopyToClipboard from 'react-use/lib/useCopyToClipboard'
import EmailSubscriber from '@/widgets/EmailSubscriber'
import { Br, SpaceGrow } from '@/widgets/Common'
// TODO: extract to Email Subscriber

import { Wrapper, Title, Desc, CopyIcon } from '../styles/actions/detail'
import { notifyCopy } from '../logic'

const Detail: FC = () => {
  const [copyState, copyToClipboard] = useCopyToClipboard()

  const rss = 'https://coderplanets.com/javascript/rss'
  return (
    <Wrapper>
      <Title>Email 订阅</Title>
      <Desc>
        <EmailSubscriber
          activeByDefault
          title="社区订阅"
          desc="社区订阅注意事项。"
        />
      </Desc>
      <Br top={50} />
      <Title>
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

export default memo(Detail)
