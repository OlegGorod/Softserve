
function calcPension (year) {
    if (typeof year !== "number") {
        return `You can indicate only number`;
    }

    let pension = 65;
    let answerAge = pension - year;
    let currentYear = 2022;
    return `Your pension will come in ${answerAge} years, in ${currentYear + answerAge} year`;
}

calcPension(45);

//
