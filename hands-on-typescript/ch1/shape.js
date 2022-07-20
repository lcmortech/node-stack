var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var jill = {
    name: 'jill'
};
var person = jill;
console.log(person);
//any type
var val = 22;
val = "string value";
val = new Array();
val.push(33);
console.log(val);
