import React from 'react'
import Masonry from 'react-masonry-component'
import Remarkable from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
// import Prism from 'mastani-codehighlight'
import { COMMUNITY_CHEATSHEET } from 'config'

import { uid } from 'utils'
import {
  Wrapper,
  CardWrapper,
  ErrorWrapper,
  ErrorTitle,
  ErrorLink,
} from './styles/cheatsheet'
import parser from './parser'
import CheatSheetStyle from './styles/CheatsheetMarkStyles'

const md = new Remarkable()
md.use(remarkableemoj)

const Cards = ({ cards }) =>
  cards.map(item => (
    <CardWrapper key={uid.gen()}>
      <CheatSheetStyle>
        <div
          className="cheatsheet-body"
          dangerouslySetInnerHTML={{
            __html: md.render(item),
          }}
        />
      </CheatSheetStyle>
    </CardWrapper>
  ))

const Cheatsheet = ({ source, communityRaw }) => {
  let data = null
  try {
    data = parser(source)
    return (
      <Wrapper>
        {data.map(item => (
          <CheatSheetStyle key={uid.gen()}>
            <div
              className="cheatsheet-body"
              dangerouslySetInnerHTML={{
                __html: md.render(item.header),
              }}
            />
            <Masonry>
              <Cards cards={item.cards} />
            </Masonry>
          </CheatSheetStyle>
        ))}
      </Wrapper>
    )
  } catch (e) {
    return (
      <ErrorWrapper>
        <ErrorTitle>解析错误</ErrorTitle>
        <ErrorLink
          href={`${COMMUNITY_CHEATSHEET}/${communityRaw}.md`}
          rel="noopener noreferrer"
          target="_blank"
        >
          查看: {`${communityRaw}.md`}
        </ErrorLink>
      </ErrorWrapper>
    )
  }
}

export default Cheatsheet
