/*
 *
 * Copyright
 *
 */

import { FC, memo } from 'react'

import type { TArticleCat } from '@/spec'
import Tooltip from '@/widgets/Tooltip'
import { buildLog } from '@/utils/logger'

import Label from './Label'
import SettingMenu from '@/widgets/SettingMenu'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Copyright:index')

const options = [
  {
    title: '功能建议',
    desc: '功能需求等建议和需求',
    key: 'feature',
  },
  {
    title: 'Bug / 吐槽',
    desc: '使用中遇到的 Bug，以及对于产品的吐槽 ',
    key: 'bug',
  },
  {
    title: '问题 / 求助',
    desc: '使用中遇到问题',
    key: 'question',
  },
]

type TProps = {
  testid?: string
  type?: TArticleCat
  mode?: 'readonly' | 'editable'
  onChange?: (type: string) => void
}

const ArticleCatLabel: FC<TProps> = ({
  testid = 'article-cat-label',
  type = 'feature',
  mode = 'readonly',
  onChange = log,
}) => {
  return (
    <Wrapper testid={testid}>
      <Tooltip
        content={
          <SettingMenu options={options} activeKey={type} onChange={onChange} />
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

export default memo(ArticleCatLabel)
