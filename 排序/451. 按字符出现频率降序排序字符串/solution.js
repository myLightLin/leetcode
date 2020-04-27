/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(let i=0;i<s.length;i++){
        const ch = s.charAt(i);
        map.set(ch, map.get(ch) + 1 || 1);
    }
    let arrObj = Array.from(map);
    arrObj.sort(function(a, b){
        return b[1] - a[1];
    })
    let res = '';
    for(var i=0;i<arrObj.length;i++){
        res += (arrObj[i][0]).repeat(arrObj[i][1])
    }
    return res;
};