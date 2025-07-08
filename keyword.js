const accountId = 12345
let accountMail = "abc@gmail.com"
var accountPassword = "54321"
accountCity = "Kolkata"
let accountState
console.log(accountId)
console.log(accountMail)
console.log(accountPassword)
console.log(accountCity)

// accountId = 23456  not allowed
accountMail = "abcd@gmail.com"
accountPassword = "123456"
accountCity = "Howrah"

console.table([accountId, accountMail, accountPassword, accountCity, accountState])

