export default function verifyPassword(password) {
  const regex = /(?!^[0-9]{6,12}$)(?!^[A-Z]{6,12}$)(?!^[a-z]{6,12}$)^[0-9A-Za-z]{6,12}$/
  return regex.test(password)
}
