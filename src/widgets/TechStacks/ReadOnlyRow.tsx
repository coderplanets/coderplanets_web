import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { Wrapper, Block, Logo, Title, NoSetHint } from './styles/row'

type TProps = {
  items: TCommunity[]
  noSet: boolean
}

const ReadOnlyRow: FC<TProps> = ({ items, noSet }) => {
  return (
    <Wrapper>
      {items?.map((t) => (
        <Block key={t.raw}>
          <Logo src={t.logo} raw={t.raw} />
          <Title>{t.title}</Title>
        </Block>
      ))}
      {noSet && <NoSetHint>保密</NoSetHint>}
    </Wrapper>
  )
}

export default memo(ReadOnlyRow)
