/*
 *
 * Filter
 *
 */

import React from 'react'

import { Wrapper, Item, SmallRadio } from '../styles/filter'

const RadioGroup = SmallRadio.Group

const Filter = ({ id, activeItemId, data }) => {
  return (
    <Wrapper className="navi-radio">
      <Item>
        {activeItemId === id && data ? (
          <RadioGroup value={data.active}>
            {data.options.map(item => (
              <SmallRadio key={item.id} value={item.title}>
                {item.title}
              </SmallRadio>
            ))}
          </RadioGroup>
        ) : (
          <RadioGroup value="a">
            <SmallRadio value="a">全部</SmallRadio>
          </RadioGroup>
        )}
      </Item>
    </Wrapper>
  )
}

export default React.memo(Filter)
