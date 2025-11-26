// const P=Math.PI;
// console.log(P);

// let str="JavaScript"
// for(let i of str){
//     console.log(i);
// }

// let arr=[11,12,13,14,15,16,17]
// for(let i=0; i<Math.floor((arr.length)/2); i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr);

// let obj={
//     name : "Mohammad",
//     age : 25,
//     address : "223 Sitkahan Tanda Ambedkar Nagar - 224190"
// }
// console.log(obj["address"]);
// console.log(obj["age"]);
// console.log(obj.name);
// console.log(Object.keys(obj)[1]);
// console.log(Object.values(obj)[1]);
// console.log(Object.entries(obj)[1]);

// let x=Object.entries(obj)
// for(let i=0; i<x.length; i++){
//     for(let j=0; j<x[i].length; j++){
//         console.log(x[i][j]); 
//     }
// }

// let arr=[21,22,23,24,25,"MOHD"]
// console.log(arr.indexOf(24));

// console.log(arr.includes("MOHD"));
// let arr1=[12,13]
// let arr2=[15,16]
// let arr3=[...arr1, ...arr2]
// console.log(arr3);


// let arr=[5,2,9,1,22,15,50,24]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);


// let revStr=(str)=>{
//     let rev=""
//     for(let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     return rev;
// }
// console.log(revStr("EYESI"));

// function longestWord(sentence){
//     let long=""
//     let word=sentence.split(" ");
//     for(let i=0; i<word.length; i++){
//         if(word[i].length>long.length){
//             long=word[i];
//         }
//     }
//     return long;
// }
// console.log(longestWord("I LOVE CODING IN JAVASCRIPTS ABCDEFGHIJKLMNOPQRS"));

// function pallindrome(str){
//     let rev=str.split('').reverse().join('');
//     if(str===rev) return `${str} is PALLINDROME`
//     else return `${str} is NOT A PALLINDROME`
// }
// console.log(pallindrome("EYEYEI"));

// let arr=[12,14,25,28,45]
// let pos=2
// for(let i=arr.length-1; i>=0; i--){
//     if(i>=pos){
//         arr[i+1]=arr[i]
//         if(i==pos){
//             arr
//         }
//     }
// }

// console.log("Start");
// const p1=fetch("https://api.github.com//users");
// console.log(p1);
// console.log("End");

// call back hell

// console.log("First");
// console.log("Second");
// let sum=0;
// for(let i=0; i<3000000000; i++)
//     sum+=i;
// console.log(sum);
// console.log("Last");

// console.log("FIRST");

// setTimeout(()=>{
//     console.log("Mohd Ziya 1");
    
// },5000)
// setTimeout(()=>{
//     console.log("Mohd Ziya 2");
// },6000)

// console.log("END");

// console.log("First");
// setTimeout(()=>{
//     console.log("Executed 1");
    
// },5000);
// setTimeout(()=>{
//     console.log("Executed 2");
// },8000)
// console.log("Last");

// function placedOrder(cb){
//     console.log("Payment is in Progress");
//     setTimeout(()=>{
//         console.log("Payment Received and Order get Placed");
//         cb();
//     },3000) 
// }
// function prepaingOrder(xy){
//     console.log("Food prepration Started");
//     setTimeout(()=>{
//         console.log("Food is now prepared");
//         // callback();
//         xy();
//     },3000)
// }

// function pickupdelivery(cb){
//     console.log("Pickup is ready ");
//     setTimeout(()=>{
//         console.log("Pick up the status");
//         cb();
//     },3000)
// }

// function deliverOrder(){
//     console.log("Delivered Order ready");
//     setTimeout(()=>{
//         console.log("Ordered Delivered");
        
//     },3000)
    
// }
// placedOrder(()=>{
//     prepaingOrder(()=>{
//         pickupdelivery(()=>{
//            deliverOrder(); 
//         });
//     });
// });
// // ();


console.log("START");

// const p1=fetch('https://api.github.com/users');
// // console.log(p1);
// const p2=p1.then((res)=>{
//     return res.json();
// })

// p2.then((resp)=>{
//     console.log(resp);
// })

// fetch('https://api.github.com/users').then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
    
// })

// const j1={
//     name : "Mohd",
//     age : 25,
//     Address : "Sitkahan, Tanda"
// }
// let jsonFormat=JSON.stringify(j1);
// console.log(jsonFormat);

































































































































