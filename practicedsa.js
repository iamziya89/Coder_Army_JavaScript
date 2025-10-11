// const P=Math.PI;
// console.log(P);

// let str="JavaScript"
// for(let i of str){
//     console.log(i);
// }

let arr=[11,12,13,14,15,16,17]
for(let i=0; i<Math.floor((arr.length)/2); i++){
    let temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr);

