import React from 'react'

import { ICON_CMD } from '../../config'

import Popover from '../Popover'

import { Wrapper, Linker, SocialIcon, PopInfo } from './styles/social_icons'
import { nilOrEmpty, SOCIAL_LISTS } from '../../utils'

const DisplayIcon = ({ user, social }) => {
  if (social.siteUrl) {
    return (
      <Linker
        href={`${social.siteUrl}/${user[social.key]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon
          src={`${ICON_CMD}/${social.key}.svg`}
          active={!nilOrEmpty(user[social.key])}
        />
      </Linker>
    )
  }
  return (
    <Popover
      placement="bottom"
      trigger="hover"
      content={
        <PopInfo>
          {social.label}
          {user[social.key]}
        </PopInfo>
      }
    >
      <div>
        <SocialIcon
          src={`${ICON_CMD}/${social.key}.svg`}
          active={!nilOrEmpty(user[social.key])}
        />
      </div>
    </Popover>
  )
}

const SocialIcons = ({ user }) => (
  <Wrapper>
    {SOCIAL_LISTS.map(social => (
      <DisplayIcon key={social.key} user={user} social={social} />
    ))}
  </Wrapper>
)

export default SocialIcons
