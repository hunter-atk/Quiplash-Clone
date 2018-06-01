let seconds;
let temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
    //   temp = document.getElementById('countdown');
    //   temp.innerHTML = "all done, bye bye";
      $("#countdown").attr("style","visibility: hidden");
      $("#question").attr("style", "transform: translateY(-200px); transition: all 1.5s ease");
      go()
        return;
      }
      $("#votingResults").attr("style","visibility: visible");
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 