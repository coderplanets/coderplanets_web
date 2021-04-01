import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { cutRest } from '@/utils'

import {
  Wrapper,
  IconWrapper,
  Block,
  BlockA,
  Icon,
  Intro,
  Header,
  Title,
  LinkIcon,
  Desc,
} from '../styles/dropdown_button/option_panel'

// there is two types of block, normal block and link
const OptionBlock = ({ children, onClick, link }) => {
  if (link) {
    return <LinkBlock link={link}>{children}</LinkBlock>
  }
  return <ActionBlock onClick={onClick}>{children}</ActionBlock>
}

const ActionBlock = ({ children, onClick }) => {
  return <Block onClick={onClick}>{children}</Block>
}

const LinkBlock = ({ children, link }) => {
  return (
    <BlockA as="a" href={link}>
      {children}
    </BlockA>
  )
}

const OptionPanel = ({ options, onClick, panelMinWidth }) => {
  return (
    <Wrapper panelMinWidth={panelMinWidth}>
      {options.map((item, index) => (
        <OptionBlock
          key={item.key}
          link={item.link}
          onClick={() => onClick(item.key)}
        >
          {/* common_check icon is special, smaller than normal icons,
          and check icon is always the first icon */}
          <IconWrapper>
            <Icon src={item.icon} index={index} bigger={index === 0} />
          </IconWrapper>
          <Intro>
            <Header>
              <Title>{item.title}</Title>
              {item.link && <LinkIcon src={`${ICON}/shape/link-hint.svg`} />}
            </Header>
            <Desc>{cutRest(item.desc, 26)}</Desc>
          </Intro>
        </OptionBlock>
      ))}
    </Wrapper>
  )
}

OptionPanel.propTypes = {
  onClick: T.func,
  options: T.arrayOf(
    T.shape({
      title: T.stirng,
      desc: T.string,
      icon: T.string,
      link: T.string,
    }),
  ),
  panelMinWidth: T.string.isRequired,
}

OptionPanel.defaultProps = {
  options: [],
  onClick: console.log,
}

export default React.memo(OptionPanel)
