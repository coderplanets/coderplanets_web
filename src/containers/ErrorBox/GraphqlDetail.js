import React from 'react'

// import { ICON_CMD } from '@config'
// import { Wrapper } from './styles'
import { uid, nilOrEmpty } from '@utils'
import { Wrapper, TitleWrapper, Dot, Title, Desc } from './styles/details'

const ChangesetMessages = ({ items }) => (
  <React.Fragment>
    {!nilOrEmpty(items) &&
      items.map(item => (
        <Desc key={uid.gen()}>
          {item.key}: {item.message}
        </Desc>
      ))}
  </React.Fragment>
)

const ChangesetDetails = ({ errors }) => (
  <React.Fragment>
    {!nilOrEmpty(errors) &&
      errors.map(item => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>
              错误码:&nbsp;
              {item.code}
            </Title>
          </TitleWrapper>
          <ChangesetMessages items={item.message} />
        </div>
      ))}
  </React.Fragment>
)

const ParseDetails = ({ errors }) => (
  <React.Fragment>
    {!nilOrEmpty(errors) &&
      errors.map((item, idx) => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>{idx}:</Title>
            <Desc>{item.message}</Desc>
          </TitleWrapper>
        </div>
      ))}
  </React.Fragment>
)

const CustomDetails = ({ errors }) => (
  <React.Fragment>
    {!nilOrEmpty(errors) &&
      errors.map(item => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>错误码: {item.code}</Title>
            <Desc>{item.message}</Desc>
          </TitleWrapper>
        </div>
      ))}
  </React.Fragment>
)

const GraphqlDetail = ({
  graphqlType,
  changesetError,
  parseError,
  customError,
}) => {
  switch (graphqlType) {
    case 'changeset':
      return (
        <Wrapper>
          <ChangesetDetails errors={changesetError} />
        </Wrapper>
      )

    case 'custom':
      return (
        <Wrapper>
          <CustomDetails errors={customError} />
        </Wrapper>
      )

    case 'parse':
      return (
        <Wrapper>
          <ParseDetails errors={parseError} />
        </Wrapper>
      )

    default:
      return <div>default error</div>
  }
}

export default React.memo(GraphqlDetail)
