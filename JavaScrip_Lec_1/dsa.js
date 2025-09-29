// const date=new Date();
// console.log(date.getMonth()+1);

// let str="Javascript"
// for(let i of str){
//     console.log(i);  
// }

// let arr=[11,12,13,14,15]
// let rev=[]
// for(let i=arr.length-1; i>=0 ; i--){
//     rev.push(arr[i])
// }
// console.log(rev);
// for(let i=0; i<arr.length/2 ; i++){
//     var temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
// }
// console.log(arr);



// let obj={
//     name:"Mohammad",
//     age:23,
//     email: "iamziya53@gmail.com"
// }
// for(let i in obj){
//     console.log(i);
    
// }

// let arr=[21,22,23,24,25]
// let indexOf=arr.indexOf(23)
// console.log(indexOf);
// console.log(arr.includes(25));

// let arr1=[1,2]
// let arr2=[3,4]
// // console.log(arr1.concat(arr2));
// let arr3=[...arr2,...arr1]
// console.log(arr3);

// let arr=[5,2,9,1,25,28,12,30]
// for(let i=0; i<arr.length ; i++){
//     for(let j=0; j<arr.length ; j++){
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);

// let str="SHAMEEM"
// let rev=""
// for(let i=str.length-1; i>=0; i--){
//     rev+=str[i]
// }
// console.log(rev);


// function reverseStr(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseStr("ANAS"));


// function longestWord(sent){
//     let long="";
//     let word=sent.split(" ");
//     for(let w of word){
//         if(w.length>long.length){
//             long=w;
//         }
//     }
//     return long;
// }
// console.log(longestWord("I LOVE CODING IN JAVASCRIPT Shammeeemma abcdefghijklmnopq"));

// PALLLINDROME
// function pallindromeStr(str){
//     let reverse=str.split('').reverse().join("");
//     if(str===reverse) return `The given ${str} is PALLINDROME`
//     else return `The given ${str} is NOT A PALLINDROME`
// }
// console.log(pallindromeStr("EYEA"));

// INSERT ELEMENT IN ARRAY

// let arr=[60,30,10,67,40]
// let pos=3;
// let newElm=1000;
// for(let i=arr.length-1; i>=pos; i--){
//     arr[i+1]=arr[i]
//     if(i==pos){
//         arr[i]=newElm;
//     }
// }
// console.log(arr);

// DELETE ELEMENT FROM AN ARRAY
// let arr=[10,20,30,40,50,60]
// let pos=2
// for(let i=pos; i<arr.length; i++){
//     arr[i]=arr[i+1]
// }
// arr.length=arr.length-1;
// console.log(arr);

// Search Element in Array
// let arr=[20,30,10,5,50,100]
// let item=10
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==item) console.log(`the ${item} is present at index ${i} and position ${i+1}rd`);
    
// }

// Wth Splice Method Delete Element
// let arr=[20,30,10,5,50,100]
// arr.splice(2,3)
// console.log(arr);


// Merging Two Arrays
// let arr1=[3,7,12,34,56,90]
// let arr2=[20,30,40,50]
// let arr3=[]
// for(let i=0; i<arr1.length; i++){
//     arr3[i]=arr1[i]
// }
// for(let j=0; j<arr2.length; j++){
//     arr3[j+arr1.length]=arr2[j]
// }
// console.log(arr3);

// let p=1;
// function fact(x){
// if(x>0){
//     console.log(x*p); 
// }
// fact(x-1)
// }
// fact(5)

// let arr = [];
// let max = 5;

// function push(val) {
//     if (arr.length >= max) {
//         return `Stack is already Full. You can't add the value ${val}`;
//     } else {
//         arr[arr.length] = val;
//         return arr;
//     }
// }

// function pop() {
//     if (arr.length === 0) {
//         console.log(`Stack is already empty. You can't delete any value...`);
//     } else {
//         let removed = arr[arr.length - 1];
//         arr.length = arr.length - 1;  // Remove last item
//         console.log(`Popped value: ${removed}`);
//         return arr;
//     }
// }

// // Testing
// console.log(push(10)); // [10]
// console.log(push(20)); // [10, 20]
// console.log(push(30)); // [10, 20, 30]
// console.log(push(40)); // [10, 20, 30, 40]
// console.log(push(50)); // [10, 20, 30, 40, 50]
// console.log(push(60)); // Stack is already Full

// pop(); // Popped value: 50
// pop(); // Popped value: 40
// console.log(arr); // [10, 20, 30]

let arr=[];
let max=6;
// console.log(arr.length);

function push(val){
    if(arr.length>=max){
        console.log(`Stack is Full. You can't add the value ${val} in stack`);
    }
    else{
        arr[arr.length]=val;
        console.log(arr);  
    }
}
push(10)
push(20)
push(30)
push(40)
push(50)
push(60)
function pop(){
    if(arr.length>0){
        arr.length=arr.length-1;
        return arr;
    }
    else{
        return `Stack is already Empty. you can't delete element from the array`
    }
}
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());


















































