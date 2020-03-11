import React from 'react'
import R from 'ramda'

import { cutFrom } from '@utils'
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
  FinanceState,
} from './styles/company_info'

const CompanyInfo = ({
  entry: { company, companyLogo, desc, field, finance, scale },
  onPreview,
}) => (
  <Wrapper onClick={onPreview}>
    <TopHalf>
      <BaseInfo>
        <Header>
          <Title>{cutFrom(company, 12)}</Title>
        </Header>
        <Middle>
          <StatesWrapper>
            <StateItem>{field} </StateItem>
            <FinanceState>{finance}</FinanceState>
            <StateItem>{scale}</StateItem>
          </StatesWrapper>
        </Middle>
      </BaseInfo>
      <CompanyLogo src={companyLogo} />
    </TopHalf>
    <Footer>
      &quot;
      {R.isEmpty(desc) ? '---' : desc} &quot;
    </Footer>
  </Wrapper>
)

export default React.memo(CompanyInfo)
