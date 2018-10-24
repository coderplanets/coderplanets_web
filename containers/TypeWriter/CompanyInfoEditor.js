import React from 'react'

import {
  Wrapper,
  Content,
  CompanyLogo,
  CompanyInfo,
  TitleInputer,
  LinkInputer,
  UploadHint,
} from './styles/company_info_editor'

import { companyOnChange, companyLinkOnChange } from './logic'

const CompanyInfoEditor = ({ editData }) => (
  <Wrapper>
    <Content>
      <CompanyLogo>
        <UploadHint>公司 Logo</UploadHint>
      </CompanyLogo>
      <CompanyInfo>
        <div>
          <TitleInputer
            placeholder="公司名称"
            value={editData.company}
            onChange={companyOnChange}
          />
        </div>
        <div>
          <LinkInputer
            placeholder="公司主页链接"
            value={editData.companyLink}
            onChange={companyLinkOnChange}
          />
        </div>
      </CompanyInfo>
    </Content>
  </Wrapper>
)

export default CompanyInfoEditor
