/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentbyMap(){
    arr.map(printingthroughMap);
    function printingthroughMap (arrayItem){
        if(arrayItem.marks <50){
            console.log(arrayItem);
        }
    }
}
function PrintStudentbyForEach() {
    arr.forEach(printthroughforeach);
    function printthroughforeach(arrayItem){
        if (arrayItem.marks <50){
            console.log(arrayItem);
        }
    }
}
function adddata(){
    let newObj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(newObj);
    console.log(arr);
}
function removeFailedStudent(){
     let failed = arr.failed(function(val){
        if (val.marks < 50 ){
            return val;
        }
     });
     console.log(failed);
}
function ConcatenateArray() {
    let arr2 =[
        { id:4,name:"joh" ,age:"30" ,marks:91},
        {id:5, name:"hani",age:"19", marks:95}, 
        {id:6, name:"pal", age:"21",marks:96},

        
    ];
    let concatArray = arr. concat(arr2);
    console.log(concatArray);
}
