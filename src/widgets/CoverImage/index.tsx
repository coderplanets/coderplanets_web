/*
 *
 * CoverImage
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { Wrapper, ImageWrapper, Image } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:CoverImage:index')

type TProps = {
  testid?: string
}

const CoverImage: FC<TProps> = ({ testid = 'cover-image' }) => {
  return (
    <Wrapper testid={testid}>
      <ImageWrapper>
        <Image
          src="https://images.unsplash.com/photo-1651010967657-4ecd485028f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          noLazy
        />
      </ImageWrapper>
    </Wrapper>
  )
}

export default memo(CoverImage)
