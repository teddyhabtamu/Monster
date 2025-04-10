// Type Aliasing

type User = {     // using the type keyword
  name: string;
  age: number;
  location?: string;    // optional property: which means we can assign or leave as undefined
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`
}

const result = printUserInfo({name: "Teddy", age: 22})

console.log(result);

