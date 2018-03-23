let str = '1,22,33oooo00000))))4455niasudga';

str.replace(/[^1~9]/gi, '');

console.log(str.replace(/[^/\d.]/gi, ''));