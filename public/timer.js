let seconds;
let temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
    //   temp = document.getElementById('countdown');
    //   temp.innerHTML = "all done, bye bye";
      $("#countdown").attr("style","visibility: hidden");
      var zoomOut = new Bounce();
      zoomOut.scale({
        from: { x: 1, y: 1 },
        to: { x: 0.3, y: 0.3 }
      });
      bounce.applyTo($("#question"));
      go()
        return;
      }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 