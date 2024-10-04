const accountId = 144553
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;   //undefined

// accountId = 2

console.log(accountId)

/* prefer not to use var
because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity])