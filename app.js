function memo() {
  const cache = {};
  // keys arr for deleting
  const keys = [];

  return function(callback, number) {
    if(cache[number]) {
      return cache[number];
    } else if(keys.length === 10) {
      // deleting first property
      // keys[0] is a number, and a number is a key for object
      delete cache[keys[0]];
      keys.splice(0,1);

      // adding number to cache and to keys arr
      cache[number] = callback(number);
      keys.push(number);
      return callback(number);
    } else {
      // adding number to cache and to keys arr
      cache[number] = callback(number);
      keys.push(number);
      return callback(number);
    }
  }
}

const callback = (number) => {
  return `+38${number}`;
}

const call = memo();

console.log(call(callback, '0670000001'));
console.log(call(callback, '0670000002'));
console.log(call(callback, '0670000002')); //returns from cache
console.log(call(callback, '0670000003'));
console.log(call(callback, '0670000004'));
console.log(call(callback, '0670000005'));
console.log(call(callback, '0670000006'));
console.log(call(callback, '0670000007'));
console.log(call(callback, '0670000008'));
console.log(call(callback, '0670000009'));
console.log(call(callback, '0670000010'));
console.log(call(callback, '0670000011')); //deletes first number in cache and put this number as last in cache
