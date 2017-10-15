import { types as t } from 'mobx-state-tree'

const CmdModel = t.model('Community', {
  title: t.string,
  desc: t.string,
  raw: t.string,
})

export default CmdModel
