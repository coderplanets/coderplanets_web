import { FC, memo } from 'react'

import { Wrapper, DudeIcon, GirlIcon } from './styles/sex_inputer'

import { SEX } from './constant'
import { inputOnChange } from './logic'

type TProps = {
  value: string
}

const SexInputer: FC<TProps> = ({ value }) => {
  return (
    <Wrapper>
      <DudeIcon value={value} onClick={() => inputOnChange(SEX.DUDE, 'sex')} />
      <GirlIcon value={value} onClick={() => inputOnChange(SEX.GIRL, 'sex')} />
    </Wrapper>
  )
}

export default memo(SexInputer)
