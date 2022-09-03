import { FC, memo } from 'react'

import type { TSelectOption } from '@/spec'
import Select from '@/widgets/Select'

import type { TSocialInfo } from '../../spec'

import {
  Wrapper,
  EachWrapper,
  SelectWrapper,
  InputWrapper,
  Input,
  DeleteIcon,
} from '../../styles/content/basic_info_part/contract_field'
import {
  socialLabelOnChange,
  socialValueOnChange,
  removeSocial,
} from '../../logic'

type TProps = {
  socialInfo: TSocialInfo[]
  socialOptions: TSelectOption[]
}

const ContractField: FC<TProps> = ({ socialInfo, socialOptions }) => {
  return (
    <Wrapper>
      {socialInfo.map((s) => (
        <EachWrapper key={s.platform}>
          <SelectWrapper>
            <Select
              value={{ label: s.platform, value: s.link }}
              options={socialOptions}
              onChange={(option) =>
                socialLabelOnChange(s.platform, option as TSelectOption)
              }
            />
          </SelectWrapper>
          <InputWrapper>
            <Input
              value={s.link}
              onChange={(e) => socialValueOnChange(s.platform, e)}
            />
          </InputWrapper>
          <DeleteIcon onClick={() => removeSocial(s.platform)} />
        </EachWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(ContractField)
