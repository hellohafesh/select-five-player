function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

function ssss(arrayy) {
    document.getElementById('btnCalculate').addEventListener('click', function () {
        const playerpaymentInput = getInputValueById('perPlayerInput');

        const newpaymentTotal = playerpaymentInput * arrayy.length;
        error(playerpaymentInput);
        setTextElementById('playerExpenses', newpaymentTotal);

    })
}

function sssa() {
    document.getElementById('calculateTotal').addEventListener('click', function () {
        const playerExpenses = getElementValueById('playerExpenses');
        const managerpaymentInput = getInputValueById('managerPay');
        error(managerpaymentInput);
        const coachpaymentInput = getInputValueById('coachPay');

        const paymentTotal = playerExpenses + managerpaymentInput + coachpaymentInput;
        setTextElementById('totalMoney', paymentTotal);
    })
}


function error(playerpaymentInput) {
    if (isNaN(playerpaymentInput)) {
        alert("Field Not Valid , Enter Money");
        return;
    }
} 