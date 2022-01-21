// let obj = {};
// console.log(obj);
// obj.name = 'Deepak';
// console.log(obj);


let mymap = new Map();

console.log(mymap);

mymap.set('name', 'Deepak');

console.log(mymap);

mymap.set('name', 'abc');
console.log(mymap);

mymap.set(1, 'abc');
console.log(mymap);

mymap.set(true, 'abc');
console.log(mymap);

mymap.set(true, function() {});
console.log(mymap);

console.log(mymap.get(1));

console.log(mymap.has(333));

console.log(mymap.delete(1));
console.log(mymap.size);
console.log(mymap.clear());
console.log(mymap);


let arr = [1, 2, 3, 3, 3, 4, 5, 5, 6, 7];

// count of each number
// 2d array - [[num, count], [num, count]];
let arrMap = new Map();
for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arrMap.has(arr[i])) {
        temp = arrMap.get(arr[i]);
        arrMap.set(arr[i], temp + 1);
    } else {
        arrMap.set(arr[i], 1);
    }
}

console.log(arrMap);
// arrMap.keys()
// arrMap.values()
// arrMap.entries()


// arr = [
//     [1, 2],
//     [3, 4],
//     [
//         [3],
//         [
//             [3], 5, 6, 7
//         ]
//     ]
// ]


let mySet = new Set();

let obj = {
    name: 'Deepak'
}

let obj2 = obj;

mySet.add('abc');
mySet.add('abc');
mySet.add(2);
mySet.add(2);
mySet.add(obj);
mySet.add(obj);
mySet.add(obj2);

console.log(mySet);

console.log(mySet.has(2));
console.log(mySet.size);
console.log(mySet.clear());
console.log(mySet);


//--------Generator - Iterator-------------
function* genfn() {
    yield 1;
    yield 123;
    yield 12345;
    yield 1234567;
}

// console.log(genfn());
let genItr = genfn();
console.log(genItr);
console.log(genItr.next());
console.log(genItr.next());
console.log(genItr.next());
console.log(genItr.next());
console.log(genItr.next());
console.log(genItr.next());