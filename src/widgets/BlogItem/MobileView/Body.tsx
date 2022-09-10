import { FC, memo } from 'react'

import type { TBlog } from '@/spec'
import { parseDomain } from '@/utils/route'

import { Wrapper, TitleLink, LinkIcon, Title } from '../styles/mobile_view/body'

type TProps = {
  item: TBlog
  onPreview?: (obj: TBlog) => void
}

const Body: FC<TProps> = ({ item, onPreview }) => {
  return (
    <Wrapper onClick={() => onPreview(item)}>
      <Title>{item.title}</Title>
      {item.linkAddr && (
        <TitleLink>
          <LinkIcon />
          <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
        </TitleLink>
      )}
    </Wrapper>
  )
}

export default memo(Body)
