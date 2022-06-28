function luckyNum(num) {
    
    let strNum = String(num);
    let x0 = strNum.slice(0,1);
    let x1 = strNum.slice(1,2);
    let x2 = strNum.slice(2,3);
    let x3 = strNum.slice(3,4);
    let x4 = strNum.slice(4,5);
    let x5 = strNum.slice(5,6);
    
    if (Number(x0)+Number(x1)+Number(x2) == Number(x3)+Number(x4)+Number(x5)) {
        console.log("You are lucky");
    } else {
        console.log("Try next time");
    }
    }

