
export function decrypt (input: string) {
  const chars = input.split("")
  let result = ""
  let charCode = 0
  let decryptedChar = ""
  for(let i = 0; i < chars.length; i++) {
    if(chars[i+2] === "#") {
      charCode = Number(`${chars[i]}${chars[i+1]}`);
      i = i + 2;
    } else {
      charCode = Number(chars[i])
    }
    decryptedChar = String.fromCharCode(charCode+96)
    result = result.concat(decryptedChar);
  }
  return result
}
