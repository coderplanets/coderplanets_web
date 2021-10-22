import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import type { TSpace, TBlogRSS } from '@/spec'
import { SVG } from '@/constant'
import DotDivider from '@/widgets/DotDivider'
import IconButton from '@/widgets/Buttons/IconButton'

import { Wrapper, Title, Subtitle } from '../styles/content/rss_item'
import { toStep } from '../logic'

type TProps = TSpace & {
  rssInfo: TBlogRSS
}

const RSSItem: FC<TProps> = ({ rssInfo, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Title>{rssInfo.title}</Title>

      {!isEmpty(rssInfo.subtitle) && <Subtitle>- {rssInfo.subtitle}</Subtitle>}
      <DotDivider space={5} />
      <IconButton icon={SVG.EDIT_PEN} onClick={() => toStep('STEP_1')} />
    </Wrapper>
  )
}

export default memo(RSSItem)
