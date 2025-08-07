const  accountId = 152451
let accountEmail = "soham@google.com"
var accountPassword = 12345
accountCity = "Jaipur"
let accountState;

/*
    If we only decalre a variable without any value then javascript by default assumes it to 'UNDEFINED'
*/

// accountId = 2 // Not Allowed

accountEmail = "sohamannadate1718@gmail.com"
accountPassword = 552233
accountCity = "Pune"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope

In javascript programming use only 
    const and let 
datatypes 
    avoide the var 
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
