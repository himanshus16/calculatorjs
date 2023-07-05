function clr(){
    console.log("clear",clr)
    return document.getElementById("numbers").value=""
 }
function appendvalue(a){
    document.getElementById('numbers').value +=a;
}
function calculate(){
    var answer=document.getElementById('numbers').value;
    let result=eval(answer);
    document.getElementById("ans").innerHTML =" Answer : "+result;
    
    // return document.getElementById('result').value=""
}
const del=()=>{
	let mystr=document.getElementById("numbers").value;
	let mydata=mystr.slice(0,-1);
	document.getElementById('numbers').value=mydata;
}