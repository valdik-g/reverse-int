module.exports = function reverse (n) {
  let m = String(n);
  if(m[0] == "-"){
      m.splice(0,1);
      let k = m.split("").reverse().join("");
      let j = Number(k);
      j*=-1;
  }
  let k = m.split("").reverse().join("");
  let j = Number(k);
  return j;
}
