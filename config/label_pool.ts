import CONFIG from './config.json'

const { ICON_CMD } = CONFIG

const LABEL_POOL = {
  default: {
    iconSrc: `${ICON_CMD}/extra_tag.svg`,
  },
  city: {
    iconSrc: `${ICON_CMD}/city_map.svg`,
  },
}

export default LABEL_POOL
