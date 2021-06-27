/*
 *
 * Filter
 *
 */

import { memo } from 'react'
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

const Filter = ({ id, expandMenuId, activeMap, options, onSelect, revert }) => {
  return (
    <Wrapper revert={revert}>
      <Item revert={revert}>
        {expandMenuId === id && options ? (
          <RadioWrapper revert={revert}>
            {options.map((item) => (
              <RadioItem
                key={item.id}
                onClick={() => onSelect(expandMenuId, item)}
              >
                {!revert ? (
                  <>
                    <ActiveDot
                      active={isActive(activeMap, expandMenuId, item.id)}
                    />
                    <RadioTitle
                      active={isActive(activeMap, expandMenuId, item.id)}
                    >
                      {item.title}
                    </RadioTitle>
                  </>
                ) : (
                  <>
                    <RadioTitle
                      active={isActive(activeMap, expandMenuId, item.id)}
                      revert
                    >
                      {item.title}
                    </RadioTitle>
                    <ActiveDot
                      active={isActive(activeMap, expandMenuId, item.id)}
                    />
                  </>
                )}
              </RadioItem>
            ))}
          </RadioWrapper>
        ) : (
          <RadioWrapper revert={revert}>
            <RadioItem>
              {!revert ? (
                <>
                  <ActiveDot active />
                  <RadioTitle active>
                    {activeMap[id] ? activeMap[id].title || '全部' : '全部'}
                  </RadioTitle>
                </>
              ) : (
                <>
                  <RadioTitle active revert>
                    {activeMap[id] ? activeMap[id].title || '全部' : '全部'}
                  </RadioTitle>
                  <ActiveDot active />
                </>
              )}
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
    }),
  ).isRequired,
  revert: T.bool.isRequired,
  onSelect: T.func.isRequired,
}

Filter.defaultProps = {
  expandMenuId: null,
}

export default memo(Filter)
