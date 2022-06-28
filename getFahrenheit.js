function getFahrenheit(number) {
    if (number !== "number") {
        return `Error`;
    } else {
        let result = 0;
        result = (number*9/5)+32;
          console.log(result);
    }
}

getFahrenheit(23);