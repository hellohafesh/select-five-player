function selectplayer(btnId, nameOfPayer) {
    document.getElementById(btnId).addEventListener('click', function () {

        const playerNameElement = document.getElementById(nameOfPayer);
        let playerName = playerNameElement.innerText;
        btnFunction();
        let list = document.getElementById('playerList');



        const playerListArray = document.getElementById('playerList');
        const indexes = [];
        for (let index = 1; index < playerListArray.length; index++) {
            if (playerListArray[index]) {
                indexes.push(index);
            }
        }
        // Take MAxiamum 5 Players 
        let arrayy = playerListArray.children;

        if (arrayy.length = 1, arrayy.length >= 5) {
            alert("Your Maximum Player Is 5!!");
            return;

        } else {
            let firstName = playerName;
            let player = document.createElement('li');
            player.appendChild(document.createTextNode(firstName));
            list.appendChild(player);
        }
        //  button Cancle 
        function btnFunction() {
            const btnCancle = document.getElementById('btnCancle');
            if (btnCancle.style.display == 'none') {
                btnCancle.style.display = 'block';
            } else {
                btnCancle.style.display = 'block';
            }
        }
        // Disable Section 
        const buttonElement = document.getElementById(btnId);

        buttonElement.setAttribute('disabled', '');


        calculate();
        function calculate() {
            document.getElementById('btnCalculate').addEventListener('click', function () {

                const playerNumber = arrayy.length;
                const playerpaymentInputField = document.getElementById('perPlayerInput');
                const playerpaymentInputString = playerpaymentInputField.value;
                const playerpaymentInput = parseInt(playerpaymentInputString);



                const totalPlayerExpenseValue = playerNumber * playerpaymentInput;
                const playerExpensesField = document.getElementById('playerExpenses');
                const playerExpensestring = playerExpensesField.innerText;
                const playerExpense = parseInt(playerExpensestring);

                playerExpensesField.innerText = totalPlayerExpenseValue;

                // console.log(totalPlayerExpenseValue);
                // console.log(playerExpensestring);
                // console.log(playerExpense);

            })
        }

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



