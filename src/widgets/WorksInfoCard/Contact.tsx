import { FC, memo } from 'react'

import type { TWorks } from '@/spec'
import { ICON } from '@/config'

import {
  Wrapper,
  SocialWrapper,
  SocialItem,
  SocialIcon,
} from './styles/contact'

type TProps = {
  article: TWorks
}

const Contact: FC<TProps> = ({ article }) => {
  const { socialInfo } = article

  return (
    <Wrapper>
      <SocialWrapper>
        {socialInfo.map((s) => (
          <SocialItem key={s.platform}>
            <a key={s.platform} href={s.link} target="_blank" rel="noreferrer">
              <SocialIcon src={`${ICON}/social/${s.platform}.svg`} size={16} />
            </a>
          </SocialItem>
        ))}
      </SocialWrapper>
    </Wrapper>
  )
}

export default memo(Contact)
