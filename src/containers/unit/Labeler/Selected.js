import React from 'react'
import { reject, isEmpty } from 'ramda'

import Maybe from '@/components/Maybe'
import { uid, Trans } from '@/utils'
import { Wrapper, Item, Hightlight } from './styles/selected'

const renderItems = (items) => {
  if (!items) return null
  const tagsList = reject((t) => t === 'refined', items)

  switch (tagsList.length) {
    case 0:
      return <Item>(--)</Item>

    case 1:
      return (
        <Item>
          (<Hightlight>{Trans(tagsList[0])}</Hightlight>)
        </Item>
      )

    case 2:
      return (
        <Item>
          (
          <Hightlight>
            {Trans(tagsList[0])}, {Trans(tagsList[1])}
          </Hightlight>
          )
        </Item>
      )

    default:
      return (
        <Item>
          (<Hightlight>{Trans(tagsList[0])}, ..</Hightlight>)
        </Item>
      )
  }
}

const renderReadonlyItems = (items) => {
  if (!items) return null
  const tagsList = reject((t) => t === 'refined', items)

  const totalLength = tagsList.length

  if (totalLength === 0) return <Item>(--)</Item>

  if (totalLength === 1) {
    return (
      <Item>
        <Hightlight>{Trans(tagsList[0])}</Hightlight>
      </Item>
    )
  }

  return (
    <Item>
      {tagsList.slice(0, totalLength - 1).map((tag) => (
        <Hightlight key={uid.gen()}>{Trans(tag)}, </Hightlight>
      ))}

      <Hightlight>{Trans(tagsList[totalLength - 1])}</Hightlight>
    </Item>
  )
}

const Selected = ({ items, readOnly }) => (
  <Maybe test={!isEmpty(items)}>
    <Maybe test={!readOnly}>
      <Wrapper>{renderItems(items)}</Wrapper>
    </Maybe>
    <Maybe test={readOnly}>
      <Wrapper>{renderReadonlyItems(items)}</Wrapper>
    </Maybe>
  </Maybe>
)

export default React.memo(Selected)
