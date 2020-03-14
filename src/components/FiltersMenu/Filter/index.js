/*
 *
 * Filter
 *
 */

import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  Item,
  RadioWrapper,
  RadioItem,
  ActiveDot,
  RadioTitle,
} from '../styles/filter'

const isActive = (activeMap, expandMenuId, itemId) => {
  if (!expandMenuId) return false
  return activeMap[expandMenuId].id === itemId
}

const Filter = ({ id, expandMenuId, activeMap, options, onSelect }) => {
  return (
    <Wrapper>
      <Item>
        {expandMenuId === id && options ? (
          <RadioWrapper>
            {options.map(item => (
              <RadioItem
                key={item.id}
                onClick={() => onSelect(expandMenuId, item)}
              >
                <ActiveDot
                  active={isActive(activeMap, expandMenuId, item.id)}
                />
                <RadioTitle active={isActive(activeMap, expandMenuId, item.id)}>
                  {item.title}
                </RadioTitle>
              </RadioItem>
            ))}
          </RadioWrapper>
        ) : (
          <RadioWrapper value="">
            <RadioItem>
              <ActiveDot active />
              <RadioTitle active>
                {activeMap[id] ? activeMap[id].title || '全部' : '全部'}
              </RadioTitle>
            </RadioItem>
          </RadioWrapper>
        )}
      </Item>
    </Wrapper>
  )
}

Filter.propTypes = {
  id: T.string.isRequired,
  expandMenuId: T.oneOfType([T.string, T.instanceOf(null)]),
  activeMap: T.shape({
    id: T.string,
    title: T.string,
  }).isRequired,
  options: T.arrayOf(
    T.shape({
      id: T.string,
      title: T.string,
    })
  ).isRequired,

  onSelect: T.func.isRequired,
}

Filter.defaultProps = {
  expandMenuId: null,
}

export default React.memo(Filter)
