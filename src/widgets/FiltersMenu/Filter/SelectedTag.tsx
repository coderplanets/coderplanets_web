import { FC, memo } from 'react'

import type { TTag } from '@/spec'

import type { TProps as TFilter } from './index'
import { Wrapper, FoldDot, Title } from '../styles/filter/tag'

type TProps = Pick<TFilter, 'expandMenuId' | 'onSelect' | 'revert'> & {
  tag: TTag
}

const SelectedTag: FC<TProps> = ({ tag, expandMenuId, onSelect, revert }) => {
  return (
    <Wrapper onClick={() => onSelect(expandMenuId, tag)}>
      {!revert ? (
        <>
          <FoldDot active={tag.title !== '不限'} />
          <Title active={tag.title !== '不限'}>
            {tag ? tag.title || '不限' : '不限'}
          </Title>
        </>
      ) : (
        <>
          <Title active={tag.title !== '不限'} revert>
            {tag ? tag.title || '不限' : '不限'}
          </Title>
          <FoldDot active={tag.title !== '不限'} />
        </>
      )}
    </Wrapper>
  )
}

export default memo(SelectedTag)
