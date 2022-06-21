import { FC, memo, Fragment } from 'react'

import type { TTab, TMenuGroup, TTouched } from '../spec'

import { Folder, Item, Title, TouchedDot } from '../styles/side_menu/group'
import { tabOnChange } from '../logic'

type TProps = {
  group: TMenuGroup
  curTab: TTab
  touched: TTouched
}

const Group: FC<TProps> = ({ group, curTab, touched }) => {
  return (
    <Fragment key={group.title}>
      <Folder>
        {group.icon}
        <Title>{group.title}</Title>
      </Folder>
      {group.children.map((item) => (
        <Item
          key={item.raw}
          $active={item.raw === curTab}
          onClick={() => tabOnChange(item.raw)}
        >
          {touched[item.raw] && <TouchedDot />}
          {item.title}
        </Item>
      ))}
    </Fragment>
  )
}

export default memo(Group)
