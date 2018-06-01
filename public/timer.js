let seconds;
let temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
    //   temp = document.getElementById('countdown');
    //   temp.innerHTML = "all done, bye bye";
      $("#countdown").attr("style","visibility: hidden");
      $("#question").attr("style", "margin-bottom: 150px; z-index: -1");
      go()
        return;
      }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 