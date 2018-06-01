let dataset = []
let votes = []

//Make websocket connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var response = document.getElementById('response'),
    btn = document.getElementById('send'),
    vote = document.getElementById('vote'),
    voteBtn = document.getElementById('voteBtn');

// Emit events
btn.addEventListener('click', function(){
  socket.emit('response', {
      response: response.value
  });
  response.value = "";
});

voteBtn.addEventListener('click', function(){
    console.log('this thing was clicked');
    console.log(vote.value)
    socket.emit('vote', {
         vote: vote.value
    });
    console.log(vote.value)
    vote.value = "";
    console.log('now fuck off')
});

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

socket.on('vote', function(data){
    console.log('a thing happened')
    let newVote = true;
    for(i=0; i<votes.length; i++){
        if(votes[i].vote == data.vote.toLowerCase()){
            votes[i].count++;
            newVote = false;
        }
    }
    if(newVote){
        votes.push({vote: data.vote.toLowerCase(), count: 1})
    }
});