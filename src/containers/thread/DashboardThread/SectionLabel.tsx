import { FC, memo, ReactNode } from 'react'

import { Wrapper, Title, Desc } from './styles/section_label'

type TProps = {
  title: string
  desc?: ReactNode
}

const SectionLabel: FC<TProps> = ({ title, desc = null }) => {
  return (
    <Wrapper>
      <Title noDesc={desc === null}>{title}</Title>
      {desc && <Desc>{desc}</Desc>}
    </Wrapper>
  )
}

export default memo(SectionLabel)
