import { FC } from 'react'

import { withGuardian } from '@/hoc'

import { Wrapper, EditIcon } from './styles/operators'

type TProps = {
  onEdit: () => void
}

const Operators: FC<TProps> = ({ onEdit }) => {
  return (
    <Wrapper onClick={onEdit}>
      <EditIcon />
    </Wrapper>
  )
}

export default withGuardian(Operators)
