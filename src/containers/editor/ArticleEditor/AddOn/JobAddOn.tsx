import { FC, memo } from 'react'

import {
  Wrapper,
  LaptopIcon,
  CompanyInput,
  LinkInput,
} from '../styles/addon/job_addon'

const JobAddOn: FC = () => {
  return (
    <Wrapper>
      <LaptopIcon />
      <CompanyInput placeholder="公司 / 团队" />
      <LinkInput placeholder="主页地址" />
    </Wrapper>
  )
}

export default memo(JobAddOn)
