/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);
    let j = 0;
    s.forEach(function (v){
        if(v >= g[j]){
            j++;
        }
    })
    return j;
};