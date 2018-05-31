let dataset = []

//Make websocket connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var response = document.getElementById('response'),
      btn = document.getElementById('send'),
      vote = document.getElementById('vote'),
      results = document.getElementById('resultsButton');

// Emit events
btn.addEventListener('click', function(){
  socket.emit('response', {
      response: response.value
  });
  response.value = "";
});

// vote.addEventListener('click', function(){
//     socket.emit('vote', {
//          hey: 'fuckOff'
//     });
// });

// Listen for events
socket.on('response', function(data){
    let newItem = true;
    for(i=0; i<dataset.length; i++){
        if(dataset[i].response == data.response.toLowerCase()){
            dataset[i].count++;
            newItem = false;
        }
    }
    if(newItem){
        dataset.push({response: data.response.toLowerCase(), count: 1})
    }
});

// socket.on('vote', function(){
//     function generateResponseList(){
//         dataset.forEach(x => {
//             console.log(x.response);
//             $("#list").append("<p class='listItem'>" + x.response + "</p>");
//         })};
//     generateResponseList();
// })