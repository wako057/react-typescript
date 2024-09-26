let age: number = 24;

let userName: string = 'gregs';

let isInstructor: boolean = false;

/// More complex types

let hobbies: string[] = ['Sports', 'Cooking'];

let person1: object = { name: 'Greg', age: 44};
let person2: any = { name: 'Greg', age: 44};

let person3: {
    name: string,
    age: number,
};

person3 = { name: 'Greg', age: 44};

let people: {
    name: string,
    age: number,
}[];

people = [{ name: 'Greg', age: 44}];

// type inference

let course1: string = 'React - The complete guide';
let course2 = 'React - The complete guide';
// course2 = 42;

let course3: string|number = 'React - The complete guide';
course3 = 42;
