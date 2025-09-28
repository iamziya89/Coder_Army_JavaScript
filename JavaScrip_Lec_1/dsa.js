// const date=new Date();
// console.log(date.getMonth()+1);

// let str="Javascript"
// for(let i of str){
//     console.log(i);  
// }

let arr=[11,12,13,14,15]
// let rev=[]
// for(let i=arr.length-1; i>=0 ; i--){
//     rev.push(arr[i])
// }
// console.log(rev);
for(let i=0; i<arr.length/2 ; i++){
    var temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr);



