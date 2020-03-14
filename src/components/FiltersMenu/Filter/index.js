/*
 *
 * Filter
 *
 */

import React from 'react'

import {
  Wrapper,
  Item,
  RadioWrapper,
  RadioItem,
  ActiveDot,
  RadioTitle,
} from '../styles/filter'

const Filter = ({ id, activeItemId, data }) => {
  return (
    <Wrapper className="navi-radio">
      <Item active>
        {activeItemId === id && data ? (
          <RadioWrapper value={data.active}>
            {data.options.map(item => (
              <RadioItem key={item.id}>
                <ActiveDot active={data.active === item.title} />
                <RadioTitle active={data.active === item.title}>
                  {item.title}
                </RadioTitle>
              </RadioItem>
            ))}
          </RadioWrapper>
        ) : (
          <RadioWrapper value="">
            <RadioItem>
              <ActiveDot active />
              <RadioTitle active>全部</RadioTitle>
            </RadioItem>
          </RadioWrapper>
        )}
      </Item>
    </Wrapper>
  )
}

export default React.memo(Filter)
