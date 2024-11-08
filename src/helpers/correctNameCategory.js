export const correctNameCategory = ({ name }) => {
  const firsLetter = name[0].toUpperCase()
  const newString = name.slice(1)
  return firsLetter + newString
}