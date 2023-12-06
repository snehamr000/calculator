function displayData(e){
    result.value+=e
}
function out(){
    result.value=eval(result.value)
}
function Allclear(){
    result.value=""
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}