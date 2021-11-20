import { FC, memo } from 'react'

import { ICON } from '@/config'

import { Wrapper, Title, PrefixIcon } from './styles/sponsor_type_title'

type TProps = {
  title: string
  type?: string
}

const SponsorTitle: FC<TProps> = ({ title, type = 'gold' }) => {
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

export default memo(SponsorTitle)
