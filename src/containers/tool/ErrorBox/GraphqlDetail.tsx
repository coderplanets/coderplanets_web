import { FC, memo } from 'react'

import type { TGQError } from '@/spec'
// import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import uid from '@/utils/uid'
import { nilOrEmpty } from '@/utils/validator'

import { Wrapper, TitleWrapper, Dot, Title, Desc } from './styles/details'

const ChangesetMessages = ({ items }) => (
  <>
    {!nilOrEmpty(items) &&
      items.map((item) => (
        <Desc key={uid.gen()}>
          {item.key}: {item.message}
        </Desc>
      ))}
  </>
)

const ChangesetDetails = ({ errors }) => (
  <>
    {!nilOrEmpty(errors) &&
      errors.map((item) => (
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
  </>
)

const ParseDetails = ({ errors }) => (
  <>
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
  </>
)

const CustomDetails = ({ errors }) => (
  <>
    {!nilOrEmpty(errors) &&
      errors.map((item) => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>错误码: {item.code}</Title>
            <Desc>{item.message}</Desc>
          </TitleWrapper>
        </div>
      ))}
  </>
)

type TProps = {
  graphqlType: string
  changesetError: TGQError[]
  parseError: TGQError[]
  customError: TGQError[]
}

const GraphqlDetail: FC<TProps> = ({
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

export default memo(GraphqlDetail)
