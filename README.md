# Quiplash Clone

## A clone of my favorite party game using D3.js and websockets.

### Description
This is a multiplayer game where players each submit an anonymous response to a fun fill-in-the-blank question, view all responses, and vote for their favorite. A bit like Cards Against Humanity, except you can fill in the blank however you like, and EVERYBODY gets to help choose the best response.

### Technologies Used
- JavaScript, HTML5, CSS
- websocket.io
- D3.js

### Challenges
Building this game began as an excuse for me to learn D3.js and to become more familiar with using websockets. The game utilizes websockets to communicate with multiple players, and a force-directed bubble chart (built using D3) displays all players' responses when a 10-second timer reaches 0.

When I started this project, I had already worked with websockets before, but I was brand new to D3, and I can see why people say it's difficult to understand. BUT, I love love LOVE the endless cool things you can do with it, and I learned quite a bit about how to use it while building this game. It's challenging, but it's fun, and I'll definitely be working with D3 more in future.

### What's next?
Right now the game isn't easy to start without specific instructions. You have to open the main page (which includes the question, timer, and bubble chart) and project it somewhere where all players can see. Then each player must open a separate and specific URL to submit their responses. I would like to modify the game so that everything happens on a single page. I'll probably use React to do this.

I'd also like to add more features to the game, including a point system to keep track of how many times your responses are voted "the best".