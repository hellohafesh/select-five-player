function selectplayer(btnId, nameOfPayer) {
    document.getElementById(btnId).addEventListener('click', function () {

        const playerNameElement = document.getElementById(nameOfPayer);
        let playerName = playerNameElement.innerText;
        btnFunction();
        // calculate();
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
            return arrayy.length;

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


        document.getElementById('btnCalculate').addEventListener('click', function () {
            const playerpaymentInput = getInputValueById('perPlayerInput');
            // validation(playerpaymentInput);

            if ((playerpaymentInput == "") || (isNaN(playerpaymentInput))) {
                alert("Field Not Valid , Enter Money");
                return;
            }

            const newpaymentTotal = arrayy.length * playerpaymentInput;

            setTextElementById('playerExpenses', newpaymentTotal);
        })


        document.getElementById('calculateTotal').addEventListener('click', function () {
            const playerExpenses = getElementValueById('playerExpenses');

            const managerpaymentInput = getInputValueById('managerPay');
            if ((managerpaymentInput == "") || (isNaN(managerpaymentInput))) {
                alert("Field Not Valid , Enter Money");
                return;
            }

            const coachpaymentInput = getInputValueById('coachPay');
            if ((coachpaymentInput == "") || (isNaN(coachpaymentInput))) {
                alert("Field Not Valid , Enter Money");
                return;
            }
            const paymentTotal = playerExpenses + managerpaymentInput + coachpaymentInput;

            setTextElementById('totalMoney', paymentTotal);
        })


    })


}




