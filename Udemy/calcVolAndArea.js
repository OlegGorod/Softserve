function calculateVolumeAndArea(def) {
    if (!Number.isInteger(def) || def<=0) {
        console.log("WRONG WRONG");
    } else {
        console.log("Объём куба: " + Math.pow(def,3) + "," + " площадь всей поверхности: " + (6*(Math.pow(def,2))));
    }
}

calculateVolumeAndArea(25);
// 