/*
 *
 * HaveADrink comments and likes
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import DotDivider from '@/widgets/DotDivider'

import { VIEW } from '../constant'
import { Wrapper, ShareIcon, CollectIcon } from '../styles/footer/share'
import { setView } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Reaction: FC = () => {
  return (
    <Wrapper>
      <CollectIcon onClick={() => setView(VIEW.EDIT)} />
      <DotDivider space={10} radius={3} />
      <ShareIcon onClick={() => setView(VIEW.EDIT)} />
    </Wrapper>
  )
}

export default memo(Reaction)
