const billAmount = document.querySelector('#bill-amount');
const checkButton = document.querySelector('#btn-check');
const cashGiven = document.querySelector('#cash-given');
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const avalNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener('click', function validateBillAmount() {
    hideMe();

    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
                calculateChange(amountToBeReturned);
        } else {
            showMessage("the cash provided should atleast be equal to the bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount!!");
    }
});

function hideMe(){
    message.style.display = "none";
}

function showMessage(Message) {
    message.style.display = "block";
    message.innerText = Message;
}

function calculateChange(amountToReturn)
{
    for(let i=0;i<avalNotes.length;i++)
    {
        const notes = Math.trunc(amountToReturn/avalNotes[i]);
        amountToReturn %= avalNotes[i];
        noOfNotes[i].innerText = notes;
    }
}