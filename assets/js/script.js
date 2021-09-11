function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML = 'Time Left: '+sec;
        sec--;
        if(sec<0){
            clearInterval(timer)
        }
    },1000);
}
timer();