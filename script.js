function decimalToBinary(num) {
  //Write you code here
let binary = "";
  let quotient = decimal;

  while (quotient > 0) {
    remainder = quotient % 2;
    binary = remainder + binary;
    quotient = Math.floor(quotient / 2);
  }

  return binary;
}

console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(33)); // 100001
