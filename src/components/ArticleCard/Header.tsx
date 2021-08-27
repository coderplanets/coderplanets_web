import { FC, memo } from 'react'

import type { TJob } from '@/spec'
import { cutRest } from '@/utils/helper'
import InlineTags from '@/components/InlineTags'
import { Br } from '@/components/Common'

import { Wrapper, Title, ExtraInfo, CompanyLink } from './styles/header'

type TProps = {
  data: TJob
}

const Header: FC<TProps> = ({ data }) => {
  const { title, articleTags, company, companyLink } = data

  return (
    <Wrapper>
      <InlineTags items={articleTags} mLeft={0} size="medium" />
      <Br top={10} />
      <Title>
        <ExtraInfo>
          <CompanyLink href={companyLink} target="_blank">
            {cutRest(company, 12)}
          </CompanyLink>
        </ExtraInfo>
        {cutRest(title, 100)}
      </Title>
    </Wrapper>
  )
}

export default memo(Header)
