/*
 *
 * Linker
 *
 */

import { FC, memo } from 'react'

import type { TSpace } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import { cutRest } from '@/utils/helper'

import { Wrapper, LinkIcon, Source } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Linker:index')

type TProps = TSpace & {
  testid?: string
  src: string
}

const Linker: FC<TProps> = ({ testid = 'linker', src, ...restProps }) => {
  return (
    <Wrapper testid={testid} {...restProps}>
      <LinkIcon src={`${ICON}/shape/link.svg`} />
      <Source href={src} target="_blank">
        {cutRest(src, 28)}
      </Source>
    </Wrapper>
  )
}

export default memo(Linker)
