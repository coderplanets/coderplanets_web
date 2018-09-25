import React from 'react'

import {
  Wrapper,
  TopHalf,
  BaseInfo,
  CompanyLogo,
  Header,
  Middle,
  Footer,
  Title,
  StatesWrapper,
  StateItem,
} from './styles/company_info'

import { cutFrom } from '../../utils'

const CompanyInfo = ({ entry }) => (
  <Wrapper>
    <TopHalf>
      <BaseInfo>
        <Header>
          <Title>{cutFrom(entry.company, 12)}</Title>
        </Header>
        <Middle>
          <StatesWrapper>
            <StateItem>移动互联网,教育 </StateItem>
            <StateItem>A轮</StateItem>
            <StateItem>150-500人</StateItem>
          </StatesWrapper>
        </Middle>
      </BaseInfo>
      <CompanyLogo src={entry.companyLogo} />
    </TopHalf>
    <Footer>“尖端技术,转正机会”</Footer>
  </Wrapper>
)

export default CompanyInfo
