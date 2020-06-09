import { compose, head, trim, split, map, nth } from 'ramda'

const groupSpliter = '{{ ::group:: }}'
const cardsHeaderSpliter = '{{ ::cards-header:: }}'
const cardItemSpliter = '{{ ::card-item:: }}'

const getCardHeader = compose(trim, head, split(cardsHeaderSpliter))
const getCardList = compose(trim, nth(1), split(cardsHeaderSpliter))

const getCardItems = compose(map(trim), split(cardItemSpliter), getCardList)
const formatFromer = (v) => ({
  header: getCardHeader(v),
  cards: getCardItems(v),
})

const parser = compose(map(formatFromer), split(groupSpliter), trim)

export default parser
