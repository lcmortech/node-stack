// function canDrive(user){
//     console.log(`user is ${user.name}`)

//     if(user.age >= 16){
//         console.log('You can drive!')
//     } else {
//         console.log('No driving for you!')
//     }
// }

// const tom ={
//     name: 'tom',
//     age: 18
// }
// canDrive(tom)

interface User {
    name: string,
    age: number
}

function canDrive(usr: User) {
    console.log(`User is ${usr.name}`)

    if(usr.age >= 16) {
        console.log(`Allow to drive`);
    } else {
        console.log(`Do not allow to drive`);
    }   
}

const tom = {
    name: 'tom',
    age: 18
}
canDrive (tom);
//ts will complain if age not added, as per User interface requirements