let string = 'ahb acb aeb aeeb adcb axeb';
let regexp = /a.b/g;
let matchAll = string.matchAll(regexp);
matchAll = Array.from(matchAll);
console.log(matchAll);