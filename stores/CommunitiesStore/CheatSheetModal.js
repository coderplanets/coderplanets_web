import { types as t } from 'mobx-state-tree'

const CheatSheetModel = t.model('CheatSheetModel', {
  title: t.string,
  desc: t.string,
  raw: t.string,
})

export default CheatSheetModel
