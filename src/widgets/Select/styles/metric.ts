import type { TThemeMap } from '@/spec'

export const getSelectStyles = (theme: TThemeMap) => {
  return {
    container: (base) => ({
      ...base,
      outline: 'none',
      zIndex: 3,
      '&:hover': {
        borderColor: '#024759',
      },
      '&:focus': {
        borderColor: '#024759',
      },
    }),
    // 容器 -- not work
    control: (base, state) => ({
      ...base,
      background: '#052630',
      borderColor: '#043443',
      // 可以消除 outLine
      boxShadow: state.isFocused ? '0 0 0 1px #00627A' : 'none',
      '&:hover': {
        borderColor: '#00627A',
      },
      '&:focus': {
        borderColor: '#00627A',
      },
    }),
    indicatorContainer: (base) => ({
      ...base,
      background: '#00262F',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      alignSelf: 'none',
      height: '12px',
      marginLeft: '-1px',
      background: '#405356',
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: '13px',
      color: theme.thread.articleDigest,
      marginLeft: 5,
      opacity: 0.8,
    }),
    // 输入框
    valueContainer: (base) => ({
      ...base,
      background: '#052630',
      width: '100%',
    }),
    // 单值
    singleValue: (base) => ({
      ...base,
      color: theme.thread.articleTitle,
      background: '#00343E',
      padding: '0 5px',
      borderRadius: '3px',
      maxWidth: '80px',
    }),
    multiValue: (base) => ({
      ...base,
      color: theme.thread.articleTitle,
      background: '#00343E',
      borderRadius: '3px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: theme.thread.articleTitle,
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: theme.thread.articleDigest,
      '&:hover': {
        cursor: 'pointer',
        color: theme.baseColor.red,
        background: '#00343E',
      },
    }),
    menu: (base) => ({
      ...base,
      background: '#00262F',
    }),
    menuList: (base) => ({
      ...base,
      border: '2px solid',
      borderColor: '#043443',
    }),
    clearIndicator: (base, state) => ({
      ...base,
      cursor: 'pointer',
      color: theme.thread.articleDigest,
      opacity: state.isFocused ? 1 : 0.5,
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      cursor: 'pointer',
      color: theme.thread.articleDigest,
      opacity: state.isFocused ? 1 : 0.8,
    }),
    option: (base) => ({
      ...base,
      height: '100%',
      background: '#00262F',

      '&:hover': {
        background: '#043443',
        cursor: 'pointer',
      },
    }),
  }
}

export const holder = 1
