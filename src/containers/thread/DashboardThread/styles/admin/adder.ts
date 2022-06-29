import styled from 'styled-components'

import css from '@/utils/css'
import Input from '@/widgets/Input'
import Button from '@/widgets/Buttons/Button'
import PlusSVG from '@/icons/Plus'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 42px;
`
export const Inputer = styled(Input)`
  height: 35px;
  font-size: 13px;
`
export const PlusIcon = styled(PlusSVG)`
  ${css.size(11)};
  fill: white;
  margin-right: 8px;
`
export const AddButton = styled(Button)`
  border-radius: 5px;
  height: 30px;
  width: 100px;
`
