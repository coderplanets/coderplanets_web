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
          <FoldDot active={tag.title !== '全部'} />
          <Title active={tag.title !== '全部'}>
            {tag ? tag.title || '全部' : '全部'}
          </Title>
        </>
      ) : (
        <>
          <Title active={tag.title !== '全部'} revert>
            {tag ? tag.title || '全部' : '全部'}
          </Title>
          <FoldDot active={tag.title !== '全部'} />
        </>
      )}
    </Wrapper>
  )
}

export default memo(SelectedTag)
