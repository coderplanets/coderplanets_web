import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  LeftButton,
  OrSign,
  RightButton,
} from '../styles/or_button/horizontal_button'

// const OrButton = ({ children, onClick, size }) => {
const HorizontalButton = ({ onClick, size, activeKey, group }) => {
  return (
    <Wrapper size={size}>
      <LeftButton
        size={size}
        active={group[0].key === activeKey}
        onClick={() => onClick(group[0].key)}
      >
        {group[0].title}
      </LeftButton>
      <OrSign>or</OrSign>
      <RightButton
        size={size}
        active={group[1].key === activeKey}
        onClick={() => onClick(group[1].key)}
      >
        {group[1].title}
      </RightButton>
    </Wrapper>
  )
}

HorizontalButton.propTypes = {
  // children: T.oneOfType(T.string, T.node),
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
  activeKey: T.string,
  group: T.arrayOf(
    T.shape({
      key: T.string,
      title: T.string,
    }),
  ),
}

HorizontalButton.defaultProps = {
  // children: 'Button',
  size: 'default',
  // eslint-disable-next-line no-console
  onClick: console.log,
  activeKey: 'hello',
  group: [
    {
      key: 'hello',
      title: 'hello',
    },
    {
      key: 'cps',
      title: 'cps',
    },
  ],
}

export default HorizontalButton
