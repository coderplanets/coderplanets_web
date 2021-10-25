import { FC, memo } from 'react'

import type { TTag } from '@/spec'
import type { TProps as TFilter } from './index'
import { Wrapper, Dot, Title } from '../styles/filter/tag'

const isActive = (activeMap, expandMenuId, itemId) => {
  if (expandMenuId === null) return false
  return activeMap[expandMenuId].id === itemId
}

type TProps = Pick<
  TFilter,
  'expandMenuId' | 'onSelect' | 'revert' | 'activeMap'
> & { tag: TTag }

const ExpandTag: FC<TProps> = ({
  tag,
  expandMenuId,
  activeMap,
  onSelect,
  revert,
}) => {
  return (
    <Wrapper onClick={() => onSelect(expandMenuId, tag)}>
      {!revert ? (
        <>
          <Dot active={isActive(activeMap, expandMenuId, tag.id)} />
          <Title active={isActive(activeMap, expandMenuId, tag.id)}>
            {tag.title}
          </Title>
        </>
      ) : (
        <>
          <Title active={isActive(activeMap, expandMenuId, tag.id)} revert>
            {tag.title}
          </Title>
          <Dot active={isActive(activeMap, expandMenuId, tag.id)} />
        </>
      )}
    </Wrapper>
  )
}

export default memo(ExpandTag)
