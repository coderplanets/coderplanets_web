import { FC, memo } from 'react'

import {
  Wrapper,
  SexLable,
  SexInput,
  DudeIcon,
  GirlIcon,
} from './styles/sex_inputer'

import { sexChange } from './logic'

type TProps = {
  label?: string
  value: string
}

const SexInputer: FC<TProps> = ({ label = '性别:', value }) => {
  return (
    <Wrapper>
      <SexLable>{label}</SexLable>
      <SexInput>
        <DudeIcon value={value} onClick={sexChange('dude')} />
        <GirlIcon value={value} onClick={sexChange('girl')} />
      </SexInput>
    </Wrapper>
  )
}

export default memo(SexInputer)
