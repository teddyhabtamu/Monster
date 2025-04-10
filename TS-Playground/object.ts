const person: {
  firstName: string;
  lastName: string;
  age: number;
  ethiopianNationality: boolean;
} = {
  firstName: 'Tewodros',
  lastName: 'Habtamu',
  age: 22,
  ethiopianNationality: true,
};

console.log(
  `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, Ethiopian: ${person.ethiopianNationality}`
);

// ----------------------------------
// Function parameters

function printUser(): { name: string; age: number; location: string } {
  return {
    name: 'Teddy',
    age: 22,
    location: 'Ethiopia',
  };
}

const res = printUser()
console.log(res);

