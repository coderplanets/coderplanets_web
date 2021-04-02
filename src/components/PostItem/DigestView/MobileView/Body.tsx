import React from 'react'

import type { TPost } from '@/spec'
import { ICON_CMD } from '@/config'
import { parseDomain } from '@/utils'

import {
  Wrapper,
  TitleLink,
  LinkIcon,
  Title,
} from '../../styles/mobile_view/body'

type TProps = {
  item: TPost
  onPreview?: (obj: TPost) => void
}

const Body: React.FC<TProps> = ({ item, onPreview }) => {
  return (
    <Wrapper onClick={() => onPreview(item)}>
      <Title>{item.title}</Title>
      {item.linkAddr && (
        <TitleLink>
          <LinkIcon src={`${ICON_CMD}/link.svg`} />
          <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
        </TitleLink>
      )}
    </Wrapper>
  )
}

export default React.memo(Body)
