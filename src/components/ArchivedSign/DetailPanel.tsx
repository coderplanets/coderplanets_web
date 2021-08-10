import { FC, memo } from 'react'

import Button from '@/components/Buttons/Button'
import { Wrapper, Title, Text, LinksWrapper } from './styles/detail_panel'

const DetailPanel: FC = () => {
  return (
    <Wrapper>
      <Title>本帖已于 2020年11月5日 存档</Title>
      <Text>存档后无法编辑，删除及评论。</Text>

      <LinksWrapper>
        <Button size="tiny" ghost noBorder>
          什么是存档?
        </Button>
      </LinksWrapper>
    </Wrapper>
  )
}

export default memo(DetailPanel)
