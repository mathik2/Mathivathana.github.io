setInterval(heartbeat,1000);


function heartbeat(){
    let heartColor = document.getElementById('heart').style.color;
    if(heartColor=='red'){
        document.getElementById('heart').style.color="pink";
        
       
    }
   else {
    document.getElementById('heart').style.color="red";
    
   
   }
}



( function () {
    let d = new Date().getHours();
    
console.log(new Date().getHours() );
    if (d >= 5 & d < 12) {
        document.getElementById('wish').innerText = "Good morning :) Guest!!";
    } else if (d >= 12 & d < 15) {
        document.getElementById('wish').innerText = "Good afternoon :) Guest!!";
    }
    else if (d >= 15 & d < 18) {
        document.getElementById('wish').innerText = "Good evening :) Guest!!";
    }
    else if (d >= 18 & d < 24) {
        document.getElementById('wish').innerText = "Good night :) Guest!!";
    }
})();
setTimeout(function () { document.getElementById('greeting').remove(); }, 8000);