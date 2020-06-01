import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD } from '@/config'
import { nilOrEmpty, SOCIAL_LISTS } from '@/utils'

import Tooltip from '@/components/Tooltip'
import { Wrapper, Linker, SocialIcon } from './styles/social_icons'

const DisplayIcon = ({ user, social }) => {
  if (user[social.key] && !contains(social.key, ['qq', 'weichat'])) {
    return (
      <Linker
        href={`${user[social.key]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon
          src={`${ICON_CMD}/${social.key}.svg`}
          active={!nilOrEmpty(user.social[social.key])}
        />
      </Linker>
    )
  }
  return (
    <Tooltip
      key={social.key}
      content={user.social[social.key]}
      placement="bottom"
    >
      <div>
        <SocialIcon
          src={`${ICON_CMD}/${social.key}.svg`}
          active={!nilOrEmpty(user.social[social.key])}
        />
      </div>
    </Tooltip>
  )
}

const SocialIcons = ({ user }) => (
  <Wrapper>
    {SOCIAL_LISTS.map(social => (
      <DisplayIcon key={social.key} user={user} social={social} />
    ))}
  </Wrapper>
)

export default React.memo(SocialIcons)
