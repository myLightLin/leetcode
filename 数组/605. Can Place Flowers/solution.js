/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++){
        let prev = i - 1;
        let next = i + 1;
        if(flowerbed[i] === 0){
            if(!(flowerbed[prev]) && !(flowerbed[next])){
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    return n<=0;
};