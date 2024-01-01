//  Dates

let myDate = new Date()
console.log(myDate);        //2024-01-01T17:14:41.688Z
console.log(myDate.toString());  //Mon Jan 01 2024 17:16:36 GMT+0000 (Coordinated Universal Time) 
console.log(myDate.toDateString()); //Mon Jan 01 2024
console.log(myDate.toISOString());  //2024-01-01T17:19:40.265Z
console.log(myDate.toJSON());       //2024-01-01T17:19:40.265Z
console.log(myDate.toLocaleDateString());   // 1/1/2024
console.log(myDate.toLocaleString());       // 1/1/2024, 5:19:40 PM
console.log(myDate.toLocaleTimeString());   // 5:19:40 PM

console.log(typeof myDate);     //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);     // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString());    // Mon Jan 23 2023

// In JS months start from 0

let myCreatedDateTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateTime.toLocaleString());    //1/23/2023, 5:03:00 AM

// Format Date
let myFormatedDate = new Date("2023-01-14")
let myDDmmYYYY = new Date("01-14-2023")
console.log(myFormatedDate.toLocaleString());   //  1/14/2023, 12:00:00 AM
console.log(myDDmmYYYY.toLocaleString());       //  1/14/2023, 12:00:00 AM


// TimeStamps

let myTimeStamp = Date.now();
console.log(myTimeStamp);       // milliseconds value :-> 1704131179410
console.log(myDDmmYYYY.getTime());
console.log(Math.floor(Date.now()/1000));   // to seconds :-> 1704132742

let newDate = new Date();
console.log(newDate.getMonth());    // 0    -> January
console.log(newDate.getMonth() + 1);    // to start the count from 1 :->  1  :-> January
console.log(newDate.getDay());      // 1    -> Monday

console.log(`${newDate.getDay()} and the time `) // to write in specific format

console.log(newDate.toLocaleString('default',{
    weekday : "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    // timeZone : 'UTC',
    // hour12 : false
}));