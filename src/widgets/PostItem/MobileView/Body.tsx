import { FC, memo } from 'react'

import type { TPost } from '@/spec'
import { parseDomain } from '@/utils/route'

import { Wrapper, TitleLink, LinkIcon, Title } from '../styles/mobile_view/body'

type TProps = {
  item: TPost
  onPreview?: (obj: TPost) => void
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
