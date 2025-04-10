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
  firstName: 'Chebude',
  lastName: 'Barega',
  age: 33,
};

console.log(user);
