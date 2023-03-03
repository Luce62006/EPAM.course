/*Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings
 ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
Get the day, month and year of the current date and output it to the console separately*/

const string = 'ahb acb aeb aeeb adcb axeb';
reg =  /a.b/g;
console.log(string.match(reg)) //[ 'ahb', 'acb', 'aeb' ]


const testString = '2 + 3 223 2223';
regExp =/(2 . 3)/g;
console.log(testString.match(regExp)) //  [ '2 + 3' ]

const date = new Date();
console.log( date.getDate() )
console.log( date.getMonth() )
console.log( date.getFullYear() )

//3
// 2
// 2023
