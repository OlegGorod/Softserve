const someString = 'This is some strange string';

function reverse(string) {
    if (typeof string !== "string") {
        return 'error';
    } else {
        let arrayString = string.split('');
        let reverseArray = arrayString.reverse();
        let reverseString = reverseArray.join('');
        return reverseString ;  
    } 
}

reverse(someString);