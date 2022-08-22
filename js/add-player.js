function selectplayer() {

    const playerNameElement = document.getElementById('messi');
    let playerName = playerNameElement.innerText;


    var list = document.getElementById('playerList');

    var firstName = playerName;
    let player = document.createElement('li');
    player.appendChild(document.createTextNode(firstName));
    list.appendChild(player);

}




