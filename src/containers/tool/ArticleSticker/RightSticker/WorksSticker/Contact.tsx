import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  SocialWrapper,
  SocialItem,
  SocialIcon,
} from '../../styles/right_sticker/works_sticker/contact'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const Contact: FC = () => {
  return (
    <Wrapper>
      <SocialWrapper>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/github.svg`} size={16} />
        </SocialItem>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/twitter.svg`} />
        </SocialItem>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/wechat.svg`} />
        </SocialItem>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/weibo.svg`} />
        </SocialItem>
      </SocialWrapper>
    </Wrapper>
  )
}

export default memo(Contact)
