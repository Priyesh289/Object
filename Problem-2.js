for(i=0;i<arr.length;i++){
    let highest =0 ;
    let name ;
      for(j=0;j<arr[i].students.length;j++){
        let sum = 0;
        for(k=0;k<arr[i].students[j].marks.length;k++){
          sum=sum+arr[i].students[j].marks[k]
        }
        if(sum>highest){
          highest = sum;
          name = arr[i].students[j].name
        }
      }
  console.log(arr[i].grade+"-"+name+"-"+highest)
    }