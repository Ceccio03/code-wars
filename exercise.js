function removeAllSpaces(str) {
    // let nospace = str.replace(/ /g, '');

    // return nospace;

    const wordArray = str.split(' ');
    const nospace = wordArray.join('');

    return nospace;
}
console.log(removeAllSpaces("pippo") === "pippo");
console.log(removeAllSpaces("   ") === "");
console.log(removeAllSpaces("le mutande di mia nonna") === "lemutandedimianonna");

function calculateBMI(weight, height) {
    const proportion = weight / (height ** 2);

    if (proportion <= 18.5) {
        return 'Underweight';
    } else if (proportion > 18.5 && proportion <= 25) {
        return 'Normal';
    } else if (proportion > 25 && proportion <= 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
console.log(calculateBMI(170, 1.60) === 'Obese');
console.log(calculateBMI(57, 1.66) === 'Normal');