export const getWidth = (type) => {
  switch (type) {
    case 'comment': {
      return '600px'
    }
    default: {
      return '680px'
    }
  }
}

export const getMinHeight = (type) => {
  switch (type) {
    case 'comment': {
      return '250px'
    }
    default: {
      return '390px'
    }
  }
}
