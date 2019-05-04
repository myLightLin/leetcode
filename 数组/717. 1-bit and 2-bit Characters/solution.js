/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits.length == 1) return true;
    return bits.join("").replace(/(10|11)/g,'x').slice(-1) != 'x';
};