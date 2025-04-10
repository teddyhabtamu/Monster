type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployee = Person & Employee;

const personAndEmployee1: PersonAndEmployee = {
  id: 1,
  name: 'Teddy',
  age: 22,
  title: 'Electrical Engineer',
};

console.log(personAndEmployee1)
