import { FC, memo } from 'react'

import type { TAliasSettings } from '../spec'

import Portal from '../Portal'
import Item from './Item'
import { Wrapper } from '../styles/alias'

type TProps = {
  settings: TAliasSettings
}

const Alias: FC<TProps> = ({ settings }) => {
  const { alias, editingAlias } = settings

  return (
    <Wrapper>
      <Portal
        title="别名设置"
        desc="覆盖系统默认的板块，组件，提示信息等名称。"
      />

      {alias.map((item) => (
        <Item key={item.raw} alias={item} editingAlias={editingAlias} />
      ))}
    </Wrapper>
  )
}

export default memo(Alias)
