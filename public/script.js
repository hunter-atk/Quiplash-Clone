let color = d3.scaleOrdinal(d3.schemeSet3);
let questions = ["This is how the world ends. Not with a bang, but with a ____", "If Gandalf and Dumbledore fought to the death, ____ would win.", "I'm voting ____ off the island!", "____. Don't try this at home.", "Trust me; I'm ____", "____ ended my last relationship."]

function go(){

    let width = 1400,
        height = 900;

    let svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)")

    let radiusScale = d3.scaleSqrt().domain([1, 10]).range([100,300])

    let simulation = d3.forceSimulation()
        .force("x", d3.forceX(width/2).strength(0.05))
        .force("y", d3.forceY(height/2).strength(0.05))
        .force("collide", d3.forceCollide(function (d) {
             return radiusScale(d.count) + 4;
        }))

    function ready (datapoints){
        let circles = svg.selectAll(".response")
             .data(datapoints)
             .enter().append("circle")
             .attr("class", "response")
             .attr("r", function (d) {
                return radiusScale(d.count)
             })
            .attr("fill", function(d, i){
                return color(i);
             })

        let texts = svg.selectAll("response")
                      .data(datapoints)
                      .enter().append("text")
                      .text(function(d, i){
                          return d.response;
                      })
                      .attr("font-family", "sans-serif")
                      .attr("font-size", function(d){
                          return radiusScale(d.count)/3;
                      })
                      .attr("fill", "black");
        
        simulation.nodes(datapoints)
            .on('tick', updatePosition)

        function updatePosition(){
            circles
            .attr("cx", function(d){
                updatePositionText()
                return d.x;
            })
            .attr("cy", function(d){
                updatePositionText()
                return d.y;
            })
        }

        //  simulation.nodes(datapoints)
        //     .on('tick', updatePositionText)

        function updatePositionText(){
             texts
                .attr("x", function(d){
                return d.x - radiusScale(d.count) + 10;
                })
                .attr("y", function(d){
                return d.y;
                })
        }
    }
    ready(dataset)
}

function generateQuestion(){
    $('#question').text(questions[Math.floor(Math.random() * Math.floor(6))]);
    questions.shift();
}



 
 




