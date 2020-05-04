/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length && count < n; i++) {
        if (flowerbed[i] === 0) {
            let prev = i === 0 ? 0 : flowerbed[i - 1]
            let next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]
            if (!next && !prev) {
                flowerbed[i] = 1
                count++;
            }
        }
    }
    return count === n;
};