import R from 'ramda'

const groupSpliter = '{{ ::group:: }}'
const cardsHeaderSpliter = '{{ ::cards-header:: }}'
const cardItemSpliter = '{{ ::card-item:: }}'

const getCardHeader = R.compose(R.trim, R.head, R.split(cardsHeaderSpliter))
const getCardList = R.compose(R.trim, R.nth(1), R.split(cardsHeaderSpliter))

const getCardItems = R.compose(
  R.map(R.trim),
  R.split(cardItemSpliter),
  getCardList
)
const formatFromer = v => ({
  header: getCardHeader(v),
  cards: getCardItems(v),
})

const parser = R.compose(R.map(formatFromer), R.split(groupSpliter), R.trim)

export default parser
