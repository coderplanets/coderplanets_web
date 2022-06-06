import { FC, memo, ReactNode } from 'react'

import { SpaceGrow } from '@/widgets/Common'

import { Wrapper, Header, Title, Desc } from './styles/section_label'

type TProps = {
  title: string
  desc?: ReactNode
  addon?: ReactNode
}

const SectionLabel: FC<TProps> = ({ title, desc = null, addon = null }) => {
  return (
    <Wrapper>
      <Header>
        <Title noDesc={desc === null}>{title}</Title>
        <SpaceGrow />
        {addon}
      </Header>
      {desc && <Desc>{desc}</Desc>}
    </Wrapper>
  )
}

export default memo(SectionLabel)
