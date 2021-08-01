import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import { ICON } from '@/config'
import { cutRest } from '@/utils/helper'
import type { TOption } from './index'

import {
  Wrapper,
  Block,
  BlockA,
  Item,
  Icon,
  Title,
  LinkIcon,
  Divider,
} from '../styles/menu_button/menu'

// there is two types of block, normal block and link
const OptionBlock = ({ item, onClick }) => {
  if (item.link) {
    return (
      <BlockA as="a" href={item.link}>
        <Item>
          <Icon src={item.icon} />
          <Title>{cutRest(item.title, 50)}</Title>
          <LinkIcon src={`${ICON}/shape/link-hint.svg`} />
        </Item>
      </BlockA>
    )
  }
  return (
    <Block onClick={onClick}>
      <Item>
        <Icon src={item.icon} />
        <Title>{cutRest(item.title, 50)}</Title>
      </Item>
    </Block>
  )
}

type TProps = {
  options: TOption[]
  extraOptions: TOption[]
  panelMinWidth: string
  onClick?: (key?: string) => void
}

const Menu: FC<TProps> = ({
  options,
  extraOptions,
  onClick,
  panelMinWidth,
}) => {
  return (
    <Wrapper panelMinWidth={panelMinWidth}>
      {options.map((item) => (
        <OptionBlock
          key={item.key}
          item={item}
          onClick={() => onClick(item.key)}
        />
      ))}
      {!isEmpty(extraOptions) && <Divider />}
      {extraOptions.map((item) => (
        <OptionBlock
          key={item.key}
          item={item}
          onClick={() => onClick(item.key)}
        />
      ))}
    </Wrapper>
  )
}

export default memo(Menu)
