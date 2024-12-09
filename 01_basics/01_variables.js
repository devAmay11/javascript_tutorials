const accountId = 144553  // once you assign value to const you can't change it
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

let accountState;

console.log(accountId);
/*
Prefer not to use var I
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword,accountState])