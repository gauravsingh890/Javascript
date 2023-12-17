const accountId = 14455
let accountEmail = "random@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 3    // const can't be changed -> not allowed to modify

accountEmail = "randomail@mail.com"
accountPassword = "2222233"
accountCity = "Delhi"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);