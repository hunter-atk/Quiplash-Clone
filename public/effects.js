var bounce = new Bounce();
bounce.scale({
    from: { x: 0.5, y: 0.5 },
    to: { x: 1, y: 1 }
});
bounce.applyTo($("#startGameContainer"));

function slideOut(){
    var slide = new Bounce();

        slide.skew({
            from: { x: 0, y: 0 },
            to: { x: 40, y: 0 }
        });

        slide.translate({
            from: { x: 0, y: 0 },
            to: { x: 1150, y: 0 }
        });

    slide.applyTo($("#startGameContainer"));
    setTimeout(function removeDis(){
        $( "#startGameContainer" ).remove();
        $("#questionContainer").attr("style","visibility: visible");
    }, 200);

}
