// fuction helpers , statics variable , mess....
export const capitalize = (word) => {
  if (typeof word !== 'string') {
    return null
  }
  return word.charAt(0).toUpperCase() + word.slice(1)
}
