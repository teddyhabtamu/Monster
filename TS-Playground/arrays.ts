// type one of defining array
const nums: number[] = [1, 2, 3, 4, 5];

console.log(nums);

// second type
const str: Array<string> = ['Teddy', 'Alex', 'Marta'];

console.log(str);

//------- push operation -----------

str.push('Habtamu');
console.log(str);

nums.push(6);
console.log(nums);

// ----- unshift operation ------
// add to the beginning
str.unshift('tedda');
console.log(str);


// ---------- Pop operation ---------

// remove the last element
str.pop()
console.log(str);

// -------------- unshift operation ----------
// remove the first element
str.shift()
console.log(str);



