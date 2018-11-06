import React from 'react'
import R from 'ramda'

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

const CompanyInfo = ({
  entry: { company, companyLogo, desc, field, finance, scale },
}) => (
  <Wrapper>
    <TopHalf>
      <BaseInfo>
        <Header>
          <Title>{cutFrom(company, 12)}</Title>
        </Header>
        <Middle>
          <StatesWrapper>
            <StateItem>{field} </StateItem>
            <StateItem>{finance}</StateItem>
            <StateItem>{scale}</StateItem>
          </StatesWrapper>
        </Middle>
      </BaseInfo>
      <CompanyLogo src={companyLogo} />
    </TopHalf>
    <Footer>&quot; {R.isEmpty(desc) ? '---' : desc} &quot;</Footer>
  </Wrapper>
)

export default CompanyInfo
