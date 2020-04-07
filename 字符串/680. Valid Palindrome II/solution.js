/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let s1 = 0;
    let e1 = s.length - 1;
    while (s1 < e1) {
        if (s.charAt(s1) !== s.charAt(e1)) {
            return isHuiwen(s, s1, e1 - 1) || isHuiwen(s, s1 + 1, e1);
        }
        s1++;
        e1--;
    }
    return true;
};

function isHuiwen(s, i, j) {
    while (i < j) {
        if (s.charAt(i++) !== s.charAt(j--)) {
            return false;
        }
    }
    return true;
}