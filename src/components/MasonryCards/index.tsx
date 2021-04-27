/*
 *
 * MasonryCards
 *
 */

import React, { FC } from 'react'
import Masonry from 'react-masonry-css'

import { buildLog } from '@/utils'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:MasonryCards:index')

type TProps = {
  testid?: string
  column?: number
  children: React.ReactNode
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

export default React.memo(MasonryCards)
