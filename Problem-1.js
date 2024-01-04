let arr=["Nrupul","Prateek","Aman","Albert","Yogesh"];
let age=[32,30,26,28,44];
let result=[];
for(let i=0;i<arr.length;i++){
  obj={};
  obj["name"]=arr[i]
  obj["age"]=age[i]
  result.push(obj)
}
bag="";
for(let j=0;j<result.length;j++){
  if(result[j][age]>=30)
  {
    bag=bag+result[j]["name"]+" ";
  }
}
console.log(bag)