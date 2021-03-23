export const lighter = (col, amt) => {

  const num = parseInt(col,16)

  let r = (num >> 16) + amt
  r = r > 255 ? 255 : r < 0 ? 0 : r
  let b = ((num >> 8) & 0x00FF) + amt
  b = b > 255 ? 255 : b < 0 ? 0 : b
  let g = (num & 0x0000FF) + amt
  g = g > 255 ? 255 : g < 0 ? 0 : g

  return '#'+(g|(b << 8)|(r << 16)).toString(16)
}