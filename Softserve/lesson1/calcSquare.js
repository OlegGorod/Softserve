function calcSquare (radius) {
    if (typeof radius !== "number") {
        return "Choose only number";
}
return Math.PI*Math.pow(radius,2);
}

calcSquare("p");