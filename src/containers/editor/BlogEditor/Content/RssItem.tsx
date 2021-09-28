import { FC, memo } from 'react'

import type { TSpace } from '@/spec'
import DotDivider from '@/components/DotDivider'

import { Wrapper, Title, EditIcon } from '../styles/content/rss_item'

type TProps = TSpace

const RSSItem: FC<TProps> = (props) => {
  return (
    <Wrapper {...props}>
      <Title>https:expdljfie.com/atom.xml</Title>
      <DotDivider space={5} />
      <EditIcon />
    </Wrapper>
  )
}

export default memo(RSSItem)
