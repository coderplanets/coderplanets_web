import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'

import Tooltip from '@/components/Tooltip'
import OptionPanel from './OptionPanel'

import {
  Wrapper,
  ButtonWrapper,
  DropdownButtonWrapper,
  MoreIcon,
} from '../styles/dropdown_button'

// <UpIcon src={`${ICON_CMD}/works/vote_up.svg`} />
const DropdownButton = ({ children, options, onClick }) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
      <Tooltip
        placement="bottom"
        trigger="click"
        hideOnClick={false}
        content={<OptionPanel options={options} onClick={onClick} />}
        noDefaultPadding
      >
        <DropdownButtonWrapper>
          <MoreIcon src={`${ICON_CMD}/works/vote_up.svg`} onClick={onClick} />
        </DropdownButtonWrapper>
      </Tooltip>
    </Wrapper>
  )
}

DropdownButton.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  onClick: T.func,
  options: T.arrayOf(
    T.shape({
      title: T.stirng,
      desc: T.string,
      icon: T.string,
    }),
  ),
  // ghost: T.bool,
  // type: T.oneOf(['primary', 'red', 'ghost']),
  // size: T.oneOf(['default', 'small']),
  // onClick: T.func,
  // className: T.string,
}

DropdownButton.defaultProps = {
  children: 'Button',
  onClick: console.log,
  options: [],
  // ghost: false,
  // type: 'primary',
  // size: 'default',
  // // eslint-disable-next-line no-console
  // onClick: console.log,
  // className: '',
}

export default React.memo(DropdownButton)
