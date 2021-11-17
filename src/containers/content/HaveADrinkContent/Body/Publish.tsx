/*
 *
 * HaveADrink Body
 *
 */

import { FC, memo } from 'react'

import Button from '@/widgets/Buttons/Button'
import Linker from '@/widgets/Linker'

import { Wrapper, Title, Body, Indent } from '../styles/body/about'
import { setView } from '../logic'

const Publish: FC = () => {
  return (
    <Wrapper>
      <Title>参与「来一杯」</Title>
      <Body>
        <Indent />
        目前是内测阶段，前端仅作产品层面展示，还无法编辑或互动 --
        在针对条目的富文本编辑、协同管理等方面还有很多细节有待梳理完善，欢迎任何形式的参与:
        <Linker
          src="/feedback"
          external={false}
          text="feedback"
          inline
          left={2}
        />
      </Body>

      <Button size="medium" onClick={() => setView('default')} noBorder ghost>
        返回
      </Button>
    </Wrapper>
  )
}

export default memo(Publish)
