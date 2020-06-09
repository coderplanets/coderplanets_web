import React from 'react'
import { isEmpty } from 'ramda'

import DocUploader from '@/containers/DocUploader'

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
      <DocUploader
        onUploadDone={() => inputOnChange('companyLogo')}
        pasteImage={false}
      >
        {isEmpty(companyLogo) ? (
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
            onChange={() => inputOnChange('company')}
          />
        </div>
        <div>
          <LinkInputer
            placeholder="公司主页链接"
            value={companyLink}
            onChange={() => inputOnChange('companyLink')}
          />
        </div>
        <div>
          <LinkInputer
            placeholder="不加班,福利好,美女多.."
            value={desc}
            onChange={() => inputOnChange('desc')}
          />
        </div>
      </CompanyInfo>
    </Content>
  </Wrapper>
)

export default React.memo(CompanyInfoEditor)
