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
        // console.log(playerListArray);
        // console.log(typeof (playerListArray));

        let arrayy = playerListArray.children;
        // console.log(arrayy);

        // let arrayy = document.getElementById('playerList').children;

        if (arrayy.length = 0, arrayy.length >= 5) {
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
        // DisableNextButton();
        // // const setdisable = btnId.setAttribute(Disabled);
        // function DisableNextButton(btnId) {
        //     document.getElementById(btnId).disabled = 'true';
        // }


        const buttonElement = document.getElementById(btnId);

        buttonElement.setAttribute('disabled', '');
        console.log(buttonElement);



    })


}





// document.getElementById('btnCancle').addEventListener('click', function () {
//     let listOfOl = document.getElementById('playerList');

//     let array = [];

//     let obj = listOfOl;


//     array.push(obj);;
//     const newarr = listOfOl.splice(-1);
//     console.log(array);
//     console.log(newarr);




// })



