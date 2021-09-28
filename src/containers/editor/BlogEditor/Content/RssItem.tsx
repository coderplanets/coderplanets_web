import { FC, memo } from 'react'

import type { TSpace } from '@/spec'
import { SVG } from '@/constant'
import DotDivider from '@/components/DotDivider'
import IconButton from '@/components/Buttons/IconButton'

import { Wrapper, Title } from '../styles/content/rss_item'
import { toStep } from '../logic'

type TProps = TSpace & {
  rss: string
}

const RSSItem: FC<TProps> = ({ rss, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Title>{rss}</Title>
      <DotDivider space={5} />
      <IconButton icon={SVG.EDIT_PEN} onClick={() => toStep('STEP_1')} />
    </Wrapper>
  )
}

export default memo(RSSItem)
