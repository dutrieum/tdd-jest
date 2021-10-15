// function roman(num) {
//     let romanTab = [];
//     romanTab[1000] = 'M';
//     romanTab[500] = 'D';
//     romanTab[100] = 'C';
//     romanTab[50] = 'L';
//     romanTab[10] = 'X';
//     romanTab[5] = 'V';
//     romanTab[1] = 'I';

//     let result = '';

//     do {
//         for (let [key, value] of romanTab) {
//             if (num >= key) {
//                 result += value;
//                 num -= key;
//                 console.log(key, value, num);
//             }
//         }
//     } while (num > 0);
// }

function numberToRoman(num) {
    let roman = '', i;
    if (num <= 4) {
        roman = digitToRoman(num);
    } else if (num < 10) {
        roman = 'V' + digitToRoman(num % 5);
    }
    return roman;
}

function digitToRoman(num) {
    let i, roman = '';
    if (num < 4) {
        for (i = 0; i < num; i++) {
            roman += 'I';
        }
    } else if (num === 4) {
        roman = 'IV';
    }
    return roman;
}

module.exports = numberToRoman;