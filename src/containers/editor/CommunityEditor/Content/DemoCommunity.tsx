/*
 *
 * DemoCommunity
 *
 */

import { FC, memo } from 'react'
import Link from 'next/link'

import type { TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'

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
  item: TCommunity
}

const DemoCommunity: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <Community>
        <Logo src={item.logo} raw={item.raw} />
        <Link href={`/${item.raw}`} passHref>
          <Title>{item.title}</Title>
        </Link>
      </Community>
    </Wrapper>
  )
}

export default memo(DemoCommunity)
