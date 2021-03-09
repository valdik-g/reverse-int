module.exports = function reverse (n) {
    let t = 0;
    if(n<0){
        n*=-1;
        t = 1;
    }
  let m = String(n);
  let k = m.split("").reverse().join("");
  let j = Number(k);
  if( t == 0)
      j*=-1;
  return j;
}
