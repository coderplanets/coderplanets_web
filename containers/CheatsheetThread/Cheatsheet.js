import React from 'react'
import Masonry from 'react-masonry-component'
import Remarkable from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
// import Prism from 'mastani-codehighlight'

import { Wrapper, CardWrapper } from './styles/cheatsheet'
import CheatSheetStyle from './styles/CheatsheetMarkStyles'

import { uid } from '../../utils'

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

const Cheatsheet = ({ source }) => (
  <Wrapper>
    {source.map(item => (
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

export default Cheatsheet
