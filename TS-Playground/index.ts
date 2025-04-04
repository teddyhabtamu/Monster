

// // String Annotation
// let myName: string = "Teddy";
// myName = "Tewodros";
// console.log(myName)

// // Number Annotation
// let myAge: number = 22;
// myAge = 20 + 2;
// console.log(myAge)

// // Boolean Annotation
// let isStudent: boolean = true;
// isStudent = !false;
// console.log(isStudent)


// // Type Inference
// let tech = "TypeScript";
// console.log("Tech name", tech)
// // console.log(typeof tech)

// let favNumber = 7;
// console.log("My favorite number", favNumber)

// let isDeveloper = true;
// console.log("Am I a developer? ", isDeveloper)

// // Any Type
// let myCar: any = "Toyota";
// myCar = 2020;
// console.log(myCar)

// // Function Parameter Annotation
// function addOne(num: string) {
//   return num + 1;
// }

// console.log(addOne("1"))

// // Arrow Function Parameter Annotation
// const double = (num: number) => {
//   return num * 2;
// }
// console.log(double(10))

// // Default parameters
// function greet(person: string = "Teddy") {
//   console.log("Hello", person);
// }

// greet("Bera")


// // Anotating the function return value
// function double2(x:number): number {
//   return x * 2;
// }

// console.log(double2(7));

// // Arrow Function
// const triple = (x: number): number => {
//   return x * 3;
// }

// console.log(triple(3))

// void in typescript
function printMessage(message: string): void {
  console.log("This is my message:", message)
}

printMessage("Work hard!")
