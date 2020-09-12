const libraries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIBRARY':
      return [
        ...state
      ]
    case 'UPDATE_LIBRARY':
      return [
        ...state
      ]
    case 'DELETE_LIBRARY':
      return [
        ...state
      ]
    default:
      return state
  }
}

export default libraries;