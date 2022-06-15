import { useEffect } from 'react'
// import { } from 'ramda'

import type { TEditValue, TTag } from '@/spec'
import { buildLog } from '@/utils/logger'
import { updateEditing } from '@/utils/mobx'

import type { TTab, TSettingField } from './spec'
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

export const onSave = (field: TSettingField): void => {
  store.onSave(field)
}

export const markEditingTag = (tag: TTag): void => {
  store.mark({ editingTag: tag })
}

export const edit = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
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
