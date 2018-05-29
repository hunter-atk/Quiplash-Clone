(function(){
 let width = 1200,
   height = 800;

 let svg = d3.select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")

 let radiusScale = d3.scaleSqrt().domain([2000, 8000]).range([30,120])

 let simulation = d3.forceSimulation()
    .force("x", d3.forceX(width/2).strength(0.05))
    .force("y", d3.forceY(height/2).strength(0.05))
    .force("collide", d3.forceCollide(function (d) {
        return radiusScale(d.area) + 4;
    }))

let dataset = [{class: "Riparian Woodland", area: 2000}, {class: "Woodland", area: 5000}, {class: "Grassland", area: 6000}, {class: "Shrubland", area: 8000}, {class: "Riparian Woodland", area: 2000}, {class: "yes", area: 3000}]

 function ready (datapoints){
     let circles = svg.selectAll(".response")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "response")
        .attr("r", function (d) {
            return radiusScale(d.area)
        })
        .attr("fill", function(d){
            return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        })

    let texts = svg.selectAll("response")
                      .data(datapoints)
                      .enter().append("text")
                      .text(function(d){
                          return d.class;
                      })
                      .attr("font-family", "sans-serif")
                      .attr("font-size", function(d){
                          return radiusScale(d.area)/3;
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
                return d.x - radiusScale(d.area) + 10;
            })
            .attr("y", function(d){
                return d.y;
            })
     }
 }
 ready(dataset)
})()
