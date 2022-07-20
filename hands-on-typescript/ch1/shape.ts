class Person {
    name: string;
}

const jill: {name: string} = {
    name: 'jill'
}

const person: Person = jill;
console.log(person) 

//any type
let val: any = 22;
val = "string value";
val = new Array();
val.push(33);
console.log(val);