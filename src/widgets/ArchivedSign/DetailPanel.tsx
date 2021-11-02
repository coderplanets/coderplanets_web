import { FC, memo } from 'react'

import { Wrapper, Title, Text } from './styles/detail_panel'

type TProps = {
  date: string
}

const DetailPanel: FC<TProps> = ({ date }) => {
  const dateString = new Date(date).toLocaleString()

  return (
    <Wrapper>
      <Title>本帖已于 {dateString} 存档</Title>
      <Text>存档后为只读, 无法编辑，删除。</Text>

      {/* <LinksWrapper>什么是存档?</LinksWrapper> */}
    </Wrapper>
  )
}

export default memo(DetailPanel)
