import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  Divider,
  CompanyBrand,
  CompanyLogo,
  CompanyLabel,
  Title,
  HomePage,
  LinkIcon,
  Link,
  CompanyStates,
  StateLabel,
  StateIcon,
  StateText,
} from './styles/company_card'

import { cutFrom } from '../../utils'

const CompanyCard = ({ data }) => (
  <Wrapper>
    <CompanyBrand>
      <CompanyLogo src={data.companyLogo} />
      <CompanyLabel>
        <Title>{cutFrom(data.company, 9)}</Title>
        <HomePage>
          <LinkIcon src={`${ICON_CMD}/home.svg`} />
          <Link
            href={data.companyLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {cutFrom(data.companyLink, 30)}
          </Link>
        </HomePage>
      </CompanyLabel>
    </CompanyBrand>
    <Divider />

    <CompanyStates>
      <StateLabel>
        <StateIcon src={`${ICON_CMD}/stock2.svg`} />
        <StateText>{data.finance}</StateText>
      </StateLabel>
      <StateLabel>
        <StateIcon src={`${ICON_CMD}/footer_field.svg`} />
        <StateText>{data.field}</StateText>
      </StateLabel>
      <StateLabel>
        <StateIcon src={`${ICON_CMD}/footer_scale.svg`} />
        <StateText>{data.scale}</StateText>
      </StateLabel>
    </CompanyStates>
  </Wrapper>
)

export default CompanyCard
