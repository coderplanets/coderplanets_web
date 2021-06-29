import { FC, memo } from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { cutRest } from '@/utils'
import type { TOption } from './index'

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

type TProps = {
  options: TOption[]
  panelMinWidth: string
  onClick?: (key?: string) => void
}

const OptionPanel: FC<TProps> = ({ options, onClick, panelMinWidth }) => {
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
            <Icon src={item.icon} index={index} />
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

export default memo(OptionPanel)
