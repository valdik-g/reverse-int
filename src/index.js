module.exports = function reverse (n) {
  let m = String(n);
  let k = m.split("").reverse().join("");
  let j = Number(k);
  return j;
}
