import { FC, memo } from 'react'

import CopyButton from '@/widgets/Buttons/CopyButton'

import { Wrapper, CopyBtnWrapper } from '../styles/widgets/code_area'

const CodeArea: FC = () => {
  const id = 'your-id'
  const value = `<script async src="https://groupher.com/xxx" id="${id}" data-token="yyy" data-width="normal" />`

  return (
    <Wrapper>
      {value}
      <CopyBtnWrapper>
        <CopyButton value={value} />
      </CopyBtnWrapper>
    </Wrapper>
  )
}

export default memo(CodeArea)
