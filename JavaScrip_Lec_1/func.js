// const user={
//     fname:"Mohammad",
//     lname:"Ziya",
//     age:23,
//     amount:5000,
// }
// console.log(user.lname);
// user.amount=100000;
// console.log(user.amount);
// const user2=user;
// user2.fname="Shameem Ahmad"
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let key of user){
//     console.log(key); 
// }
// const name=user.lname;
// const age=user.age;
// console.log(name,age);

const user={
    fname:"Mohammad",
    lname:"Ziya",
    age:23,
    amount:5000,
}

// const {f,a}=user;
// console.log(f,a);

// const arr=[10,20,30,40,50]
// const [f, l]=arr;
// console.log(f, l);
for(let i of Object.keys(user)){
    console.log(user[i]);
}
for(let val of Object.values(user)){
    console.log(val);
}







