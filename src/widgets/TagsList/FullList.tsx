import { FC, memo } from 'react'

import { sortByColor } from '@/utils/helper'
import { Trans } from '@/utils/i18n'

import type { TProps as TTagProps } from './index'

import { Wrapper, Tag, DotSign, Title, SolidTitle } from './styles'

type TProps = Pick<TTagProps, 'items' | 'mLeft' | 'size' | 'mode'>

const FullList: FC<TProps> = ({ items, mLeft, size, mode = 'default' }) => {
  return (
    <Wrapper mLeft={mLeft}>
      {sortByColor(items).map((tag) => (
        <Tag key={tag.title}>
          {mode === 'default' && <DotSign color={tag.color} size={size} />}
          {mode === 'default' ? (
            <Title size={size}>{Trans(tag.title)}</Title>
          ) : (
            <SolidTitle size={size} color={tag.color}>
              {Trans(tag.title)}
            </SolidTitle>
          )}
        </Tag>
      ))}
    </Wrapper>
  )
}

export default memo(FullList)
