"use strict"

function vowelsAndConsonants(s) {
    // make 2 empty array, one for vowels, one for consonants
    let vowels = [];
    let consonants = [];
    // loop through the original array
    for (let k = 0; k < s.length; k++) {
        if (s[k] === 'a' || s[k] === 'e' || s[k] === 'i' || s[k] === 'o' || s[k] === 'u') {
            console.log("line 8", s[k])
        } else {
            console.log("test")
        }
    }
}
// concat consonants array onto end of vowels array
//vowels.concat(consonants);
// make another loop, and print each charatcer in that array.
// for(let j = 0; j < vowels.length; j++){
//     console.log(vowels[j])
// }



vowelsAndConsonants('javascriptloops')