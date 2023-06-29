function memo() {
  const cache = {};
  // keys arr for deleting
  const keys = [];

  return function(callback, ...args) {

    const result = [];

    args.forEach(number => {
      if(cache[number]) {
        result.push(cache[number]);
      } else if(keys.length === 10) {
        // deleting first property
        // keys[0] is a number, and a number is a key for object
        delete cache[keys[0]];
        keys.splice(0,1);
  
        // adding number to cache and to keys arr
        cache[number] = callback(number);
        keys.push(number);
        result.push(callback(number));
      } else {
        // adding number to cache and to keys arr
        cache[number] = callback(number);
        keys.push(number);
        result.push(callback(number));
      }
    });

    // if multiple args - print each
    if(Array.isArray(args))  {
      result.forEach(number => {
        console.log(number)
      });
    } else {
      console.log(result[0])
    }
  }
}

const callback = (number) => {
  return `+38${number}`;
}

const call = memo();

call(callback, '0670000001');
call(callback, '0670000002');
call(callback, '0670000002'); //returns from cache
call(callback, '0670000003');
call(callback, '0670000004', '0670000005', '0670000006');
call(callback, '0670000007');
call(callback, '0670000008');
call(callback, '0670000009');
call(callback, '0670000010');
call(callback, '0670000011'); //deletes first number in cache and put this number as last in cache
