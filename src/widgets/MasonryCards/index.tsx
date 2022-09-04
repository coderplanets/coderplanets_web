/*
 *
 * MasonryCards
 *
 */

import { FC, ReactNode, memo } from 'react'
import Masonry from 'react-masonry-css'

import { buildLog } from '@/utils/logger'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:MasonryCards:index')

type TProps = {
  testid?: string
  column?: number
  children: ReactNode
}

const MasonryCards: FC<TProps> = ({
  testid = 'masonry-cards',
  column = 2,
  children,
}) => {
  return (
    <Wrapper testid={testid}>
      <Masonry
        breakpointCols={column}
        className="masonry-cards-grid"
        columnClassName="masonry-cards-grid_column"
      >
        {children}
      </Masonry>
    </Wrapper>
  )
}

export default memo(MasonryCards)
