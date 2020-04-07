/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let res = [];
    let i = 0;
    let j = s.length - 1;
    while(i <= j){
        let ci = s.charAt(i);
        let cj = s.charAt(j);
        if(!vowels.includes(ci)){
            res[i++] = ci;
        }else if(!vowels.includes(cj)){
            res[j--] = cj;
        }else{
            res[i++] = cj;
            res[j--] = ci;
        }
    }
    return res.join('');
};