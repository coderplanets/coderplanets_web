import React from 'react'

import { ICON_CMD } from '../../config'

import {
  LoadingIcon,
  PrefixIcon,
  PrefixSearchIcon,
  PrefixMagicIcon,
} from './styles/input_prefix'

const InputPrefix = ({ prefix, searching }) => {
  if (searching) {
    return <LoadingIcon src={`${ICON_CMD}/loading_sand.svg`} />
  }

  switch (prefix) {
    case '': {
      return <PrefixSearchIcon src={`${ICON_CMD}/search.svg`} />
    }
    case '#': {
      return <PrefixSearchIcon src={`${ICON_CMD}/shell_focus.svg`} />
    }
    case '@': {
      return <PrefixSearchIcon src={`${ICON_CMD}/shell_user.svg`} />
    }
    case '?': {
      return <PrefixSearchIcon src={`${ICON_CMD}/shell_help.svg`} />
    }
    case '/': {
      return <PrefixMagicIcon src={`${ICON_CMD}/doraemon_cat.svg`} />
    }
    case 'login': {
      return <PrefixIcon src={`${ICON_CMD}/login.svg`} />
    }
    case 'theme': {
      return <PrefixIcon src={`${ICON_CMD}/themes.svg`} />
    }
    default: {
      return <PrefixSearchIcon src={`${ICON_CMD}/search.svg`} />
    }
  }
}

export default InputPrefix
