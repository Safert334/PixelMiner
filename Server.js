document.getElementById('server-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let serverName = document.getElementById('server-name').value;
    let game = document.getElementById('game').value;
    
    alert('Server Created! Server Name: ' + serverName + ', Game: ' + game);
});