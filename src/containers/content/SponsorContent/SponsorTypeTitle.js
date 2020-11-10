import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'

import { Wrapper, Title, PrefixIcon } from './styles/sponsor_type_title'

const SponsorTitle = ({ title, type }) => {
  const iconSrc =
    type === 'gold' ? `${ICON}/shape/wing.svg` : `${ICON}/shape/candy.svg`

  return (
    <Wrapper>
      <PrefixIcon src={iconSrc} reverse />
      <Title>{title}</Title>
      <PrefixIcon src={iconSrc} />
    </Wrapper>
  )
}

SponsorTitle.propTypes = {
  type: T.oneOf(['gold', 'heart']),
  title: T.string.isRequired,
}

SponsorTitle.defaultProps = {
  type: 'gold',
}

export default React.memo(SponsorTitle)
