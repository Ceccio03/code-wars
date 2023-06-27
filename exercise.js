function removeAllSpaces(str) {
    let nospace = str.replace(/ /g, '');

    return nospace;
}
console.log(removeAllSpaces("pippo") === "pippo");
console.log(removeAllSpaces("   ") === "");
console.log(removeAllSpaces("le mutande di mia nonna") === "lemutandedimianonna");