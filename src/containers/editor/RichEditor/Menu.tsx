import { FC, memo } from 'react'
import { ICON } from '@/config'

import IconButton from '@/components/Buttons/IconButton'
import MenuButton from '@/components/Buttons/MenuButton'

const menuOptions = [
  {
    key: 'quote',
    icon: `${ICON}/article/import.svg`,
    title: '导入内容',
  },
  {
    key: 'share',
    icon: `${ICON}/article/export.svg`,
    title: '导出内容',
  },
  {
    key: 'edit',
    icon: `${ICON}/help.svg`,
    title: '使用帮助',
  },
]

const extraOptions = [
  {
    key: 'edit',
    icon: `${ICON}/shape/ear.svg`,
    title: '建议反馈',
  },
]

const Menu: FC = () => {
  return (
    <MenuButton
      options={menuOptions}
      extraOptions={extraOptions}
      placement="bottom-end"
      onClick={console.log}
    >
      <IconButton path="shape/more.svg" mLeft={16} />
    </MenuButton>
  )
}

export default memo(Menu)
