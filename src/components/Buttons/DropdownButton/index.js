import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'

import Tooltip from '@/components/Tooltip'
import OptionPanel from './OptionPanel'

import {
  Wrapper,
  ButtonWrapper,
  DropdownButtonWrapper,
  Divider,
  MoreIcon,
} from '../styles/dropdown_button'

// <UpIcon src={`${ICON_CMD}/works/vote_up.svg`} />
const DropdownButton = ({
  children,
  options,
  onClick,
  placement,
  panelMinWidth,
}) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
      <Tooltip
        placement={placement}
        trigger="click"
        hideOnClick={false}
        content={
          <OptionPanel
            options={options}
            onClick={onClick}
            panelMinWidth={panelMinWidth}
          />
        }
        noPadding
      >
        <DropdownButtonWrapper>
          <MoreIcon src={`${ICON_CMD}/works/vote_up.svg`} onClick={onClick} />
        </DropdownButtonWrapper>
      </Tooltip>
      <Divider />
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
      link: T.string,
    }),
  ),
  placement: T.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
  ]),
  panelMinWidth: T.string,
  // ghost: T.bool,
  // type: T.oneOf(['primary', 'red', 'ghost']),
  // onClick: T.func,
  // className: T.string,
}

DropdownButton.defaultProps = {
  children: 'Button',
  onClick: console.log,
  options: [],
  placement: 'bottom',
  panelMinWidth: '100%',
  // ghost: false,
  // type: 'primary',
  // size: 'default',
  // // eslint-disable-next-line no-console
  // onClick: console.log,
  // className: '',
}

export default React.memo(DropdownButton)
