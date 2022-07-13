import { useEffect } from 'react'
// import { } from 'ramda'

import type { TEditValue, TTag } from '@/spec'
import { buildLog } from '@/utils/logger'
import { updateEditing, toJS } from '@/utils/mobx'

import type { TTab, TSettingField, TAlias } from './spec'
// import S from './schma'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:DashboardThread')

export const tabOnChange = (curTab: TTab): void => {
  store.mark({ curTab })
}

/**
 * rollback editing value to init value
 */
export const rollbackEdit = (field: TSettingField): void => {
  store.rollbackEdit(field)
}

export const updateEditingTag = (tag: TTag): void => {
  store.mark({ editingTag: tag })
}

export const updateEditingAlias = (alias: TAlias): void => {
  store.mark({ editingAlias: alias })
}

export const resetEdit = (field: TSettingField): void => store.resetEdit(field)

export const edit = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

/**
 * save to server
 */
export const onSave = (field: TSettingField, force = false): void => {
  store.mark({ saving: true })
  store.onSave(field)

  const time = force ? 0 : 1200

  setTimeout(() => {
    store.mark({ saving: false })
    const initSettings = { ...store.initSettings, [field]: toJS(store[field]) }

    store.mark({ initSettings })
  }, time)
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
