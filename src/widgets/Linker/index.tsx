/*
 *
 * Linker
 *
 */

import { FC, memo } from 'react'

import type { TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'

import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Linker:index')

type TProps = TSpace & {
  testid?: string
  src: string
  text?: string
  hint?: string | null
  // link to external or some domain
  external?: boolean
  openInNewTab?: boolean
  inline?: boolean
}

const Linker: FC<TProps> = ({
  testid = 'linker',
  src,
  text = '',
  hint = null,
  external = true,
  openInNewTab = true,
  inline = false,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} inline={inline} {...restProps}>
      {external ? (
        <ExternalLink src={src} hint={hint} />
      ) : (
        <InternalLink src={src} text={text} openInNewTab={openInNewTab} />
      )}
    </Wrapper>
  )
}

export default memo(Linker)
