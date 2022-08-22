function selectplayer(btnId, nameOfPayer) {
    document.getElementById(btnId).addEventListener('click', function () {

        const playerNameElement = document.getElementById(nameOfPayer);
        let playerName = playerNameElement.innerText;
        myFunction();
        let list = document.getElementById('playerList');



        const playerListArray = document.getElementById('playerList');
        const indexes = [];
        for (let index = 0; index < playerListArray.length; index++) {
            if (playerListArray[index] === 'a') {
                indexes.push(index);
            }
        }

        let arrayy = document.getElementById('playerList').children;

        if (arrayy.length = 0, arrayy.length >= 5) {
            let dBlock;
            alert("Your Maximum Player Is 5!!");
            return;

        } else {
            let firstName = playerName;
            let player = document.createElement('li');
            player.appendChild(document.createTextNode(firstName));
            list.appendChild(player);
        }

        function myFunction() {
            const btnCancle = document.getElementById('btnCancle');
            if (btnCancle.style.display == 'none') {
                btnCancle.style.display = 'block';
            } else {
                btnCancle.style.display = 'block';
            }
        }

    })


}


function getcancle() {

    document.getElementById('btnCancle').addEventListener('click', function () {
        let listOfOl = document.getElementById('playerList');



        let array = [];

        let obj = listOfOl.innerText;

        array.push(obj);
        let poped = array.pop();

        console.log(array);
        console.log(poped);




    })
}


