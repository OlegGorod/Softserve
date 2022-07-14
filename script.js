var timesClicked = 0;
function btnClickMore(){
    timesClicked ++;     
    document.getElementById('timesClicked').innerHTML = timesClicked;
    return true ;
}
function btnClickLess(){
  if(timesClicked == 0){
    return false;
  } 
    timesClicked --;     
    document.getElementById('timesClicked').innerHTML = timesClicked;
    return true ;
}
     
   