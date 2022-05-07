import { FC, Fragment, memo } from 'react'
import { isEmpty } from 'ramda'
import QRCode from 'qrcode.react'

import type { TMenuOption } from '@/spec'

import { ICON } from '@/config'
import { SVG } from '@/constant'
import { cutRest } from '@/utils/helper'

import {
  Wrapper,
  Block,
  BlockA,
  QRWrapper,
  Item,
  Title,
  LinkIcon,
  Divider,
  getIcon,
} from '../styles/menu_button/menu'

// there is two types of block, normal block and link
const OptionBlock = ({ item, onClick }) => {
  const Icon = getIcon(item.icon || SVG.UPVOTE)

  if (item.link) {
    return (
      <BlockA as="a" href={item.link}>
        <Item>
          <Icon />
          <Title>{cutRest(item.title, 50)}</Title>
          <LinkIcon src={`${ICON}/shape/link-hint.svg`} />
        </Item>
      </BlockA>
    )
  }
  return (
    <Block onClick={onClick}>
      <Item>
        <Icon />
        <Title>{cutRest(item.title, 50)}</Title>
      </Item>
    </Block>
  )
}

type TProps = {
  options: TMenuOption[]
  extraOptions: TMenuOption[]
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
        <Fragment key={item.key}>
          <OptionBlock item={item} onClick={() => onClick(item.key)} />
          {item.qrLink && (
            <QRWrapper>
              <QRCode value={item.qrLink} size={72} />
            </QRWrapper>
          )}
        </Fragment>
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
