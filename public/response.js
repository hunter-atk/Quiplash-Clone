//Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var response = document.getElementById('response'),
      btn = document.getElementById('send'),
      results = document.getElementById('resultsButton');

// Emit events
btn.addEventListener('click', function(){
  socket.emit('response', {
      response: response.value
  });
  response.value = "";
});

// Listen for events
socket.on('response', function(data){
    if(data.response == 'go'){
        go()
    }
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
    // console.log(data.response.toLowerCase())
    console.log(dataset)
});