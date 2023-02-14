export default verifyPassword = function(password) {
  const regex = "/(?!^[0-9]{16,12}$)(?!^[A-Z]{6,12}$)(?!^[a-z]{6,12}$)^[0-9A-Za-z]{6,12}$/"
  return regex.test(password)
}
