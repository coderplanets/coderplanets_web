import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { useDevice } from '@/hooks'
import { cutRest } from '@/utils'

import {
  Wrapper,
  Normal,
  IconWrapper,
  MoreIcon,
  UpWrapper,
  IconWithTextWrapper,
  UpIcon,
  UpText,
} from './styles/expand_texts'
import { toggleDescExpand } from './logic'

const text =
  '全球疫情催生了很多断章取义的新闻，我发现各路媒体现在特别会抓网民的爽点深谙撩拨之道，知道哪里轻轻一碰，就会引发高潮。美国和欧洲在疫情早期判断错误，死硬到底拒不管制，现在被现实打脸纷纷封城，这种剧情反转的打脸情节特别爽，以至于这条“巴西黑帮封城”的新闻.'

type TProps = {
  descExpand: boolean
}

const ExpandTexts: FC<TProps> = ({ descExpand }) => {
  const { isMobile } = useDevice()
  const cutLength = !isMobile ? 26 : 10

  return (
    <Wrapper>
      {descExpand ? (
        <Normal margin>
          {text}
          <UpWrapper onClick={toggleDescExpand}>
            <IconWithTextWrapper>
              <UpIcon src={`${ICON_CMD}/community_expand_up.svg`} />
              <UpText>收起</UpText>
            </IconWithTextWrapper>
          </UpWrapper>
        </Normal>
      ) : (
        <Normal>
          {cutRest(text, cutLength)}
          <IconWrapper onClick={toggleDescExpand}>
            <MoreIcon src={`${ICON_CMD}/community_expand_more2.svg`} />
          </IconWrapper>
        </Normal>
      )}
    </Wrapper>
  )
}

export default memo(ExpandTexts)
