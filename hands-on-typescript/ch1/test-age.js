function canDrive(user) {
    console.log("user is " + user.name);
    if (user.age >= 16) {
        console.log('You can drive!');
    }
    else {
        console.log('No driving for you!');
    }
}
var tom = {
    name: 'tom',
    age: 18
};
canDrive(tom);
