const someString = 'This is some strange string';

console.log(someString.split('').reverse().join(''));

// function reverse(string) {
//     if (typeof string !== "string") {
//         return 'error';
//     } else {
//         let arrayString = string.split('');
//         let reverseArray = arrayString.reverse();
//         let reverseString = reverseArray.join('');
//         return reverseString ;  
//     } 
// }

// reverse(someString);


// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// reverse(someString);
