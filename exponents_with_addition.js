var pow = function(base, exponent) {
if (exponent === 0) {return 1}
if (exponent === 1) {return base}
var result = base;
let exp = 1;
var placeholder = 0;
while (exp < exponent) {
  for (var i = 1; i <= base; i++) {
      placeholder += result;
  }
  result = placeholder
  placeholder = 0
  exp ++;
}

return result;
}