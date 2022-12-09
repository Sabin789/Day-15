 
  x = "John"
  y = "Doe"
  z=" "
  s="<"
  b=">"
console.log("----------ex21-----------")

   console.log(`${x}${z}${s}${b}${z}${y}`)
   object={
    name:"name",
    surname:"surname",
    email:"email"
   }
   console.log("----------ex23-----------")
delete object.email
console.log(object)
console.log("----------ex25-----------")
array=["1","2","3","4","5","6","7","8","9","0"]
for(i=0;i<array.length;i++){
  console.log(array[i])
}
console.log("----------ex26-----------")

randArray=[]
for(i=0;i<100;i++){
    random=Math.floor(Math.random()*100)
    randArray.push(random)
}
console.log(randArray)
console.log("----------ex27-----------")
function minMax(n){
  console.log(Math.min(...n))
  console.log(Math.max(...n))
}

minMax(randArray)

console.log("----------ex28-----------")

let arr=[]
for(i=0;i<5;i++){
    arr.push([])
    for(j=0;j<10;j++){
        random=Math.floor(Math.random()*100)
        arr[i].push(random)

    }
}
console.log(arr)
console.log("----------ex29-----------")
array=[2,3,4]
array2=[3,4,5,6,7,8,9]
function largestArray(first,second){
if(first.length > second.length){
    return "first"
}else{
    return "second"
}
}


console.log(largestArray(array,array2))
console.log("----------ex30-----------")
function higherSum(a,b){
 let first
 let second
 for(i=0;i<a.length;i++){
    first+= a[i]
 }


for(j=0;j<b.length;j++){
 second+= b[j]
}
if(first>second){
    return "The sum of the first array is bigger"
}else if(second>first){
    return "The sum of the second array is bigger"
}
}
 
console.log(higherSum(array2,array))





