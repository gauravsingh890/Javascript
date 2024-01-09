const user = {
    userName : "john",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}


user.welcomeMessage();      // john , welcome to website
// {
//     userName: 'john',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
user.userName  = "sam"
user.welcomeMessage();      // sam , welcome to website
// {
//     userName: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

console.log(this);          // {}

