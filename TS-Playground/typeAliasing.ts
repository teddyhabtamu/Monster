// Type Aliasing

type User = {     // using the type keyword
  name: string;
  readonly age: number;  // we can make uneditable(read only) property
  location?: string;    // optional property: which means we can assign or leave as undefined (So it become optional)
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`
}

const result = printUserInfo({name: "Teddy", age: 22})

console.log(result);



const user1: User = {
  name: "Huxun",
  age: 20,
  location: "China"
}

// now when i try to change user1 age throws an error

