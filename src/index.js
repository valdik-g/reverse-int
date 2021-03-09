module.exports = function reverse (n) {
  let n = String(n);
  let k = n.split("").reverse().join("");
  let j = Number(k);
  return j;
}
