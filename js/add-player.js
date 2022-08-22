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
                alert("Empty Field , Enter Money");
                return;
            }
            // else {


            // }
            // if (!/^[0-9]+$/.test(playerpaymentInput)) {
            //     alert("Please Input Number")
            //     return;
            // }

            const newpaymentTotal = arrayy.length * playerpaymentInput;

            setTextElementById('playerExpenses', newpaymentTotal);
        })


        document.getElementById('calculateTotal').addEventListener('click', function () {
            const playerExpenses = getElementValueById('playerExpenses');

            const managerpaymentInput = getInputValueById('managerPay');
            if ((managerpaymentInput == "") || (isNaN(managerpaymentInput))) {
                alert("Empty Field , Enter Money");
                return;
            }

            const coachpaymentInput = getInputValueById('coachPay');
            if ((coachpaymentInput == "") || (isNaN(coachpaymentInput))) {
                alert("Empty Field , Enter Money");
                return;
            }
            const paymentTotal = playerExpenses + managerpaymentInput + coachpaymentInput;

            setTextElementById('totalMoney', paymentTotal);
        })


    })


}






        // function calculate() {
        //     document.getElementById('btnCalculate').addEventListener('click', function () {

        //         const playerNumber = arrayy.length;
        //         const playerpaymentInputField = document.getElementById('perPlayerInput');
        //         const playerpaymentInputString = playerpaymentInputField.value;
        //         const playerpaymentInput = parseInt(playerpaymentInputString);

        //         const validPlayerPayment = document.getElementById('perPlayerInput').value;
        //         if (validPlayerPayment == "") {
        //             alert("Empty Field , Enter Money");
        //             return;
        //         }
        //         if (!/^[0-9]+$/.test(validPlayerPayment)) {
        //             alert("Please Input Number")
        //             return;
        //         }


        //         const totalPlayerExpenseValue = playerNumber * playerpaymentInput;
        //         const playerExpensesField = document.getElementById('playerExpenses');
        //         const playerExpensestring = playerExpensesField.innerText;
        //         const playerExpense = parseInt(playerExpensestring);

        //         playerExpensesField.innerText = totalPlayerExpenseValue;

        //         calculatetotal()

        //         function calculatetotal() {

        //             document.getElementById('calculateTotal').addEventListener('click', function () {

        //                 console.log(totalPlayerExpenseValue);
        //                 const managerpaymentInputField = document.getElementById('managerPay');
        //                 const managerpaymentInputString = managerpaymentInputField.value;
        //                 const managerpaymentInput = parseInt(managerpaymentInputString);

        //                 const validManagerPayment = document.getElementById('managerPay').value;
        //                 if (validManagerPayment == "") {
        //                     alert("Empty Field , Enter Money");
        //                     return;
        //                 }
        //                 if (!/^[0-9]+$/.test(validManagerPayment)) {
        //                     alert("Please Input Number")
        //                     return;
        //                 }

        //                 const coachpaymentInputField = document.getElementById('coachPay');
        //                 const coachpaymentInputString = coachpaymentInputField.value;
        //                 const coachpaymentInput = parseInt(coachpaymentInputString);

        //                 const validCoachPayment = document.getElementById('coachPay').value;
        //                 if (validCoachPayment == "") {
        //                     alert("Empty Field , Enter Money ");
        //                     return;
        //                 }
        //                 if (!/^[0-9]+$/.test(validCoachPayment)) {
        //                     alert("Please Input Number")
        //                     return;
        //                 }


        //                 const totalpaymentInputField = document.getElementById('totalMoney');
        //                 const totalpaymentInputString = totalpaymentInputField.innerText;
        //                 const totalpaymentInput = parseInt(totalpaymentInputString);

        //                 const grandtotalpayment = totalPlayerExpenseValue + managerpaymentInput + coachpaymentInput;

        //                 totalpaymentInputField.innerText = grandtotalpayment;
                //
                // console.log(playerExpensestring);
                // console.log(playerExpense);

//             })
//         }

//     })


// }














// document.getElementById('btnCancle').addEventListener('click', function () {
//     let listOfOl = document.getElementById('playerList');

//     let array = [];

//     let obj = listOfOl;


//     array.push(obj);;
//     const newarr = listOfOl.splice(-1);
//     console.log(array);
//     console.log(newarr);




// })



