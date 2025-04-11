let myVar: string | number = 'Teddy';
console.log(myVar);

myVar = 6;

type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  lastName: 'Barega',
  age: 33,
  email: "chebude@gmail.com",
  password: "123"
};

console.log(user);


// Either array of strings or numbers but not contain both string and number
const items: string[] | number[] = ['one', "two", 'three']



// To contain both string and number in a single array we can use this
const items1: (string | number | true)[] = [1, "one", 2, "Two", true]
