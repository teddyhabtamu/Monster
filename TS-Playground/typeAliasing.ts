type User = {     // using the type keyword
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`
}

const result = printUserInfo({name: "Teddy", age: 22, location: "Ethiopia"})

console.log(result);

