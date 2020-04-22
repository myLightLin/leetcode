/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  let res = '';
  for(let dict of d){
      let l1 = res.length;
      let l2 = dict.length;
      if(l1 > l2 || (l1 == l2 && res.localeCompare(dict) < 0)){
          continue;
      }
      if(isSubstr(s, dict)){
          res = dict
      }
  }
  return res;
};

function isSubstr(str, target) {
  let i = j = 0;
  while(i < str.length && j < target.length){
      if(str.charAt(i) === target.charAt(j)){
          j++;
      }
      i++;
  }
  return j === target.length;
}