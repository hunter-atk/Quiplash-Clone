let dataset = []

//Connect to Firebase
const ref = firebase.database().ref('Database')
ref.on('value', gotData, errData);
function gotData(data){
    let fbData = data.val();
    dataset = [];
  function createDataset(){
    for (x in fbData){
        dataset.push(fbData[x]);
    }
    console.log(dataset)
  }
  createDataset()
}
function errData(err){
    console.log(err)
}



//Make websocket connection
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
        return go()
    }
    if(data.response == 'new'){
        location.reload();
        return ref.remove()
    }
    let newItem = true;
    for(i=0; i<dataset.length; i++){
        if(dataset[i].response == data.response.toLowerCase()){
            dataset[i].count++;
            newItem = false;
        }
    }
    if(newItem){
        // dataset.push({response: data.response.toLowerCase(), count: 1})
        ref.push({response: data.response.toLowerCase(), count: 1})
    }
});