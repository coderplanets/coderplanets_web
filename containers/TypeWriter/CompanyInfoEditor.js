import React from 'react'
import R from 'ramda'

import DocUploader from '../DocUploader'

import {
  Wrapper,
  Content,
  LogoUploadBox,
  CompanyLogo,
  CompanyInfo,
  TitleInputer,
  LinkInputer,
  UploadHint,
} from './styles/company_info_editor'

import { inputOnChange } from './logic'

const CompanyInfoEditor = ({
  editData: { company, companyLogo, companyLink, desc },
}) => (
  <Wrapper>
    <Content>
      <DocUploader onUploadDone={inputOnChange.bind(this, 'companyLogo')}>
        {R.isEmpty(companyLogo) ? (
          <LogoUploadBox>
            <UploadHint>公司 Logo</UploadHint>
          </LogoUploadBox>
        ) : (
          <CompanyLogo src={companyLogo} />
        )}
      </DocUploader>
      <CompanyInfo>
        <div>
          <TitleInputer
            placeholder="公司名称"
            value={company}
            onChange={inputOnChange.bind(this, 'company')}
          />
        </div>
        <div>
          <LinkInputer
            placeholder="公司主页链接"
            value={companyLink}
            onChange={inputOnChange.bind(this, 'companyLink')}
          />
        </div>
        <div>
          <LinkInputer
            placeholder="不打卡,双休,五险一金,美女多 ..."
            value={desc}
            onChange={inputOnChange.bind(this, 'desc')}
          />
        </div>
      </CompanyInfo>
    </Content>
  </Wrapper>
)

export default CompanyInfoEditor
