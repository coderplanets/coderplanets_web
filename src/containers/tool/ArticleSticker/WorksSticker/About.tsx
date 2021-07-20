import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Row,
  LinkIcon,
  LinkAddr,
  SocialWrapper,
  SocialItem,
  SocialIcon,
  SocialName,
} from '../styles/works_sticker/about'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const About: FC = () => {
  return (
    <Wrapper>
      <Row>
        <LinkIcon src={`${ICON}/social/global.svg`} />
        <LinkAddr href="coderplanets.com">coderplanets.com</LinkAddr>
      </Row>

      <SocialWrapper>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/github.svg`} />
          <SocialName>github</SocialName>
        </SocialItem>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/twitter.svg`} />
          <SocialName>twitter</SocialName>
        </SocialItem>
        <SocialItem>
          <SocialIcon src={`${ICON}/social/wechat.svg`} />
          <SocialName>微信群</SocialName>
        </SocialItem>
      </SocialWrapper>
    </Wrapper>
  )
}

export default memo(About)
