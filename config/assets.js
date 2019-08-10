import * as CONFIG from './config.json'

export const { ASSETS_ENDPOINT } = CONFIG
// process.env.ALI_OSS_ADDR
// export const ASSETS_ENDPOINT = 'https://coderplanets.oss-cn-beijing.aliyuncs.com'

export const ICON_BASE = `${ASSETS_ENDPOINT}/icons`
export const ICON_CMD = `${ASSETS_ENDPOINT}/icons/cmd`

export const DEFAULT_ICON = `${ASSETS_ENDPOINT}/icons/cmd/cheatsheet.svg`
