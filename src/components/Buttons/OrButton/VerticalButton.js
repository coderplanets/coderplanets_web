import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  UpButton,
  OrSign,
  BottomButton,
} from '../styles/or_button/vertical_button'

const VerticalButton = ({ onClick, size, activeKey, group }) => {
  return (
    <Wrapper onClick={onClick} size={size}>
      <UpButton size={size} active={group[0].key === activeKey}>
        {group[0].title}
      </UpButton>
      <OrSign>or</OrSign>
      <BottomButton size={size} active={group[1].key === activeKey}>
        {group[1].title}
      </BottomButton>
    </Wrapper>
  )
}

VerticalButton.propTypes = {
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
  activeKey: T.string,
  group: T.arrayOf(
    T.shape({
      key: T.string,
      title: T.string,
    })
  ),
}

VerticalButton.defaultProps = {
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

export default VerticalButton
