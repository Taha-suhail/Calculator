function touch(value){
    document.getElementById("result").value+=value;
}
function clearScreen(){
    document.getElementById("result").value = "";
}
function calculate(){
    
    var evaluate = document.getElementById("result").value;
    var totalEvaluate = eval(evaluate);
    document.getElementById("result").value = totalEvaluate;
}