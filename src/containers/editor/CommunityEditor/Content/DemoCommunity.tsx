/*
 *
 * DemoCommunity
 *
 */

import { FC, memo } from 'react'

import { ICON_BASE } from '@/config'
import { buildLog } from '@/utils/logger'
import { Trans } from '@/utils/i18n'

// import SearchBox from './SearchBox'
import {
  Wrapper,
  Community,
  Logo,
  Title,
} from '../styles/content/demo_community'

// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:NewExploreContent')

type TProps = {
  title: string
  type?: 'pl'
}

const DemoCommunity: FC<TProps> = ({ title, type = 'pl' }) => {
  // @ts-ignore
  const unit = type === 'city' ? 'svg' : 'png'

  return (
    <Wrapper>
      <Community>
        <Logo src={`${ICON_BASE}/${type}/${title}.${unit}`} />
        <Title>{Trans(title)}</Title>
      </Community>
    </Wrapper>
  )
}

export default memo(DemoCommunity)
