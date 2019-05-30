/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const map = new Map();
    for(const k of deck){
        if(!map.has(k)){
            map.set(k, 0);
        }
        map.set(k, map.get(k) + 1);
    }
    const values = [...map.entries()];
    let r = 0;
    for(const e of values){
        r = gcd(r, e[1]);
    }
    return r > 1;
};

function gcd(a, b) {
    if(b == 0){
        return a;
    }
    return gcd(b, a % b);
}
