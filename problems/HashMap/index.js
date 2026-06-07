// Map
// Key -> Value pairs

let myMap = new Map([['a1', 'Yatish'], ['a2', 'Mansi']]);

// Override with same key
myMap.set('a2', 'Kriyansh')

//Add new element
myMap.set('a3', 'Mansi')

console.log(myMap);

//Remove element
myMap.delete('a3')

console.log(myMap.get('a2'));


/**
 * Weak Map
 * - Only set object as key
 * - Can not be iterated
 */

let weakMap = new WeakMap();
var ob1 = {'name': 'yatish'};
var ob2 = {};

weakMap.set(ob1, 'Private')
weakMap.set(ob2, 'Private Data')

console.log(weakMap);
