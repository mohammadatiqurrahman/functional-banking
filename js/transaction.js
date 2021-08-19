
function getInputValue(inputId){
    const takeInput = document.getElementById(inputId);
    const putInput = takeInput.value;
    const convertedPutInput = parseFloat(putInput);
    takeInput.value = '';
    return convertedPutInput;
}
function previousAmount(newDepositeAmount,depositeWithdrawAmount){
    const catchPreviousText = document.getElementById(depositeWithdrawAmount)
    const putPreviousText = catchPreviousText.innerText;
    const putPreviousTextToNumber = parseFloat(putPreviousText);
    const newDepositeTotal = putPreviousTextToNumber + newDepositeAmount
    catchPreviousText.innerText = newDepositeTotal;
    // return catchPreviousText.innerText;
}
function updateBalance(newDepositeAmount,isAdd){
    const currentBalance = document.getElementById('balance-amount');
    const previousBalance = currentBalance.innerText;
    if(isAdd == true){
        const currentTotalBalance = parseFloat(previousBalance) + newDepositeAmount
        currentBalance.innerText = currentTotalBalance;
    }
    else{
        const currentTotalBalance = parseFloat(previousBalance) - newDepositeAmount
        currentBalance.innerText = currentTotalBalance;
    }
}
document.getElementById('deposite-btn').addEventListener('click', function(){
 const newDepositeAmount = getInputValue('deposite-input');
 if(newDepositeAmount > 0){
 previousAmount(newDepositeAmount,'deposite-amount');
 updateBalance(newDepositeAmount, true)
    // update total balance
 }
 else{
     alert('please enter positive value')
 }
  });
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newDepositeAmount = getInputValue('withdraw-input');
    if(newDepositeAmount > 0){
        previousAmount(newDepositeAmount,'withdraw-amount');
        updateBalance(newDepositeAmount, false)
    }
    else{
        alert('please enter positive value')
    }
    
});