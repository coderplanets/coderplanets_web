import { FC, memo } from 'react'

import { Wrapper, SlashSign, DateText } from '../styles/list/date_divider'

type TProps = {
  text: string | null
}

const DateDivider: FC<TProps> = ({ text }) => {
  if (!text) return null

  return (
    <Wrapper>
      <SlashSign>&#47;&#47;</SlashSign> <DateText>{text}</DateText>
    </Wrapper>
  )
}

export default memo(DateDivider)
