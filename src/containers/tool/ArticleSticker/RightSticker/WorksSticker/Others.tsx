import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import type { TWorks } from '@/spec'
import { Trans } from '@/utils/i18n'
import {
  Wrapper,
  Item,
  Label,
  Value,
} from '../../styles/right_sticker/works_sticker/others'

type TProps = {
  article: TWorks
}

const Others: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <Item>
        <Label>盈利模式:</Label>
        <Value>{Trans(article.profitMode)}</Value>
      </Item>
      <Item>
        <Label>工作状态:</Label>
        <Value>{Trans(article.workingMode)}</Value>
      </Item>
      <Item>
        <Label>所在城市:</Label>

        {isEmpty(article.cities) && <Value>--</Value>}
        {article.cities.map((c) => (
          <Value key={c.link}>{c.title}</Value>
        ))}
      </Item>
    </Wrapper>
  )
}

export default memo(Others)
