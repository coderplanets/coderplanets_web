/*
 *
 * RichEditor
 *
 */

import { FC } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import useScript from '@/hooks/useScript'
import IconButton from '@/components/Buttons/IconButton'
import MenuButton from '@/components/Buttons/MenuButton'
import Checker from '@/components/Checker'

import type { TStore } from './store'
import { useInit } from './logic'
// import * as logic from './logic'

import OverwriteStyle from './styles/overwrite'
import { Wrapper, MenusWrapper, EditorWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

type TProps = {
  richEditor?: TStore
}

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

const RichEditorContainer: FC<TProps> = ({ richEditor: store }) => {
  const [loaded] = useScript(
    'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest',
  )

  useInit(store, loaded)

  // 使用模板 or 转载或翻译 or 请保持友善
  return (
    <Wrapper>
      <OverwriteStyle />
      <MenusWrapper>
        <Checker
          // checked
          size="small"
          dimWhenIdle
          // onChange={(checked) => toggleTemplate(checked)}
        >
          转载 / 翻译
        </Checker>
        <MenuButton
          options={menuOptions}
          extraOptions={extraOptions}
          placement="bottom-end"
          onClick={console.log}
        >
          <IconButton path="shape/more.svg" mLeft={16} />
        </MenuButton>
      </MenusWrapper>
      <EditorWrapper id="codex-editor" />
    </Wrapper>
  )
}

export default pluggedIn(RichEditorContainer) as FC<TProps>
