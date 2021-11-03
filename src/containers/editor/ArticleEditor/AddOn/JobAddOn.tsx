import { FC, memo, useState } from 'react'

import { isURL } from '@/utils/validator'

import type { TEditData } from '../spec'
import {
  Wrapper,
  LaptopIcon,
  LinkIcon,
  CompanyInput,
  LinkInput,
} from '../styles/addon/job_addon'
import { editOnChange } from '../logic'

type TProps = {
  editData: TEditData
}

const JobAddOn: FC<TProps> = ({ editData }) => {
  const [invalid, setInvalid] = useState(false)

  return (
    <Wrapper>
      <LaptopIcon />
      <CompanyInput
        value={editData.company}
        placeholder="公司 / 团队"
        onChange={(v) => editOnChange(v, 'company')}
      />
      <LinkIcon />
      <LinkInput
        invalid={invalid}
        value={editData.companyLink}
        placeholder="主页地址（可选）"
        onChange={(v) => {
          if (!isURL(v.target.value)) {
            setInvalid(true)
          } else {
            setInvalid(false)
          }

          editOnChange(v, 'companyLink')
        }}
      />
    </Wrapper>
  )
}

export default memo(JobAddOn)
