import { FC, memo, Fragment } from 'react'
import { keys } from 'ramda'

import { Br } from '@/widgets/Common'
import Sticky from '@/widgets/Sticky'

import { MENU } from '../constant'
import type { TTab, TTouched, TMenuGroup } from '../spec'

import Group from './Group'

import { Wrapper } from '../styles/side_menu'

type TProps = {
  curTab: TTab
  touched: TTouched
}

const SideMenu: FC<TProps> = ({ curTab, touched }) => {
  const groupKeys = keys(MENU)

  return (
    <Wrapper>
      <Sticky offsetTop={30}>
        {groupKeys.map((key) => (
          <Fragment key={key}>
            <Group
              group={MENU[key] as TMenuGroup}
              curTab={curTab}
              touched={touched}
            />
            <Br top={30} />
          </Fragment>
        ))}
      </Sticky>
    </Wrapper>
  )
}

export default memo(SideMenu)
