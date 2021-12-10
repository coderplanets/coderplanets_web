import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import type { TWorks } from '@/spec'
import { ICON } from '@/config'

import {
  Wrapper,
  SocialWrapper,
  EmptyHint,
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
        {isEmpty(socialInfo) && <EmptyHint>--</EmptyHint>}

        {socialInfo.map((s) => (
          <SocialItem key={s.platform} isEmail={s.platform === '邮箱'}>
            <a
              key={s.platform}
              href={s.platform === '邮箱' ? `mailto:${s.link}` : s.link}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon src={`${ICON}/social/${s.platform}.svg`} size={16} />
            </a>
          </SocialItem>
        ))}
      </SocialWrapper>
    </Wrapper>
  )
}

export default memo(Contact)
