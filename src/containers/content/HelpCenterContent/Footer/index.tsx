import { FC } from 'react'

import type { TCommunity } from '@/spec'
import type { TVisibles } from '../spec'

import Reaction from './Reaction'
import HelpInfo from './HelpInfo'

import { Wrapper } from '../styles/footer'

type TProps = {
  community: TCommunity
  visibles: TVisibles
}

const Footer: FC<TProps> = ({ community, visibles }) => {
  const { showHelpInfo, showReaction } = visibles
  return (
    <Wrapper>
      {showReaction && <Reaction visibles={visibles} />}
      {showHelpInfo && <HelpInfo community={community} />}
    </Wrapper>
  )
}

export default Footer
