import React from 'react'
import R from 'ramda'
import ReactTooltip from 'react-tooltip'

import { ICON_CMD } from '@config'

import { nilOrEmpty, SOCIAL_LISTS } from '@utils'
import { Wrapper, Linker, SocialIcon } from './styles/social_icons'

const tooltipOffset = JSON.stringify({ left: 3 })

const DisplayIcon = ({ user, social }) => {
  if (user[social.key] && !R.contains(social.key, ['qq', 'weichat'])) {
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
    <div
      key={social.key}
      data-tip={user.social[social.key]}
      data-for="social_icons"
      data-offset={tooltipOffset}
    >
      <SocialIcon
        src={`${ICON_CMD}/${social.key}.svg`}
        active={!nilOrEmpty(user.social[social.key])}
      />
    </div>
  )
}

const SocialIcons = ({ user }) => (
  <Wrapper>
    {SOCIAL_LISTS.map(social => (
      <DisplayIcon key={social.key} user={user} social={social} />
    ))}
    <ReactTooltip effect="solid" place="bottom" id="social_icons" />
  </Wrapper>
)

export default SocialIcons
