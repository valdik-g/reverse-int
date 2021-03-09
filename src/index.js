module.exports = function reverse (n) {
    if(n<0){
        n*=-1;
    }
  let m = String(n);
  let k = m.split("").reverse().join("");
  let j = Number(k);
  return j;
}
