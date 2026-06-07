// Set
// It contains only unique value
// Object constructur

let arr = [1,2,3,4]
let obj = new Set(arr);

console.log(obj);

obj.add(5);
obj.add(5);

console.log(obj);

obj.delete(2);

console.log(obj);

// Can store Object, Array, String, Number
var obj1 = { name: 'Yatish' };
obj.add(obj1)

console.log(obj);

// Check Value Exist
console.log(obj.has(10));

// Clear Set
obj.clear()

/**
 * Weak Set
 * - Only set object values
 * - Can not be iterated
 */

let weakSet = new WeakSet();
// weakSet.add(1) // ERROR: TypeError: Invalid value used in weak set

var ob1 = {'name': 'yatish'};
var ob2 = {};

weakSet.add(ob1);
weakSet.add(ob2);

console.log(weakSet.has(ob2));

console.log(weakSet);
