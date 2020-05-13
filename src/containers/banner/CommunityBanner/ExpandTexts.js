import React from 'react'
// import { length } from 'stringz'
import { ICON_CMD } from '@/config'
import { cutFrom } from '@/utils'

import {
  Wrapper,
  Normal,
  MoreIcon,
  UpWrapper,
  UpIcon,
  UpText,
} from './styles/expand_texts'
import { toggleDescExpand } from './logic'

const text =
  '全球疫情催生了很多断章取义的新闻，我发现各路媒体现在特别会抓网民的爽点深谙撩拨之道，知道哪里轻轻一碰，就会引发高潮。美国和欧洲在疫情早期判断错误，死硬到底拒不管制，现在被现实打脸纷纷封城，这种剧情反转的打脸情节特别爽，以至于这条“巴西黑帮封城”的新闻，也被媒体写出了爽文的风格'

const ExpandTexts = ({ descExpand }) => {
  return (
    <Wrapper descExpand={descExpand}>
      {descExpand ? (
        <Normal margin>{text}</Normal>
      ) : (
        <Normal>{cutFrom(text, 26)}</Normal>
      )}

      {descExpand ? (
        <UpWrapper onClick={toggleDescExpand}>
          <UpIcon src={`${ICON_CMD}/community_expand_up.svg`} />
          <UpText>收起</UpText>
        </UpWrapper>
      ) : (
        <div onClick={toggleDescExpand}>
          <MoreIcon src={`${ICON_CMD}/community_expand_more2.svg`} />
        </div>
      )}
    </Wrapper>
  )
}

export default React.memo(ExpandTexts)
