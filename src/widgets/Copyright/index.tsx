/*
 *
 * Copyright
 *
 */

import { FC, memo } from 'react'

import type { TCopyright } from '@/spec'
import Tooltip from '@/widgets/Tooltip'
import { buildLog } from '@/utils/logger'

import Label from './Label'
import SettingMenu from '@/widgets/SettingMenu'
import ReadOnlyPanel from './ReadOnlyPanel'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Copyright:index')

const options = [
  {
    title: '知识共享 4.0',
    desc: '署名-非商业性使用-禁止演绎',
    key: 'cc',
  },
  {
    title: '转载需授权',
    desc: '转载需得到我的明确授权。',
    key: 'approve',
  },
  {
    title: '禁止转载',
    desc: '禁止一切形式的转载，有疑问联系我。',
    key: 'forbid',
  },
]

type TProps = {
  testid?: string
  type?: TCopyright
  mode?: 'readonly' | 'editable'
  onChange?: (type: string) => void
}

const Copyright: FC<TProps> = ({
  testid = 'copyright',
  type = 'cc',
  mode = 'readonly',
  onChange = log,
}) => {
  return (
    <Wrapper testid={testid}>
      <Tooltip
        content={
          mode === 'readonly' ? (
            <ReadOnlyPanel type={type} />
          ) : (
            <SettingMenu
              options={options}
              activeKey={type}
              onChange={onChange}
            />
          )
        }
        placement="top"
        delay={800}
        noPadding
      >
        <Label type={type} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(Copyright)
