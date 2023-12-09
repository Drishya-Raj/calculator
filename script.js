function buttonClick(val){
    document.getElementById("inputbox").value += val;
    console.log("val==>",val)
}
function allClear(){
document.getElementById("inputbox").value = '';
}
function output(){
    let text = document.getElementById("inputbox").value;
    let result = eval(text);
    document.getElementById('inputbox').value = result;
}
function numberClear(){
    let text = document.getElementById("inputbox").value;
    document.getElementById("inputbox").value = text.substr(0, text.length-1);
}