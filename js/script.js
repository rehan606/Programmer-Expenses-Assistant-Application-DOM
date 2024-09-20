
document.getElementById('calculate').addEventListener('click', function(){

    const income = inputFieldGetById('income')
    const softwareExpenses = inputFieldGetById('software')
    const courseExpenses = inputFieldGetById('courses')
    const internetExpenses = inputFieldGetById('internet')

    

    // Calculation
    const totalExpenses = softwareExpenses + courseExpenses + internetExpenses
    const balance = income - totalExpenses;


    //----------------------------Display Total Expenses------------------------

    // const totalExpensesDisplay = innerTextById('total-expenses')
    const totalExpensesDisplay = document.getElementById('total-expenses')
    totalExpensesDisplay.innerText = totalExpenses.toFixed(2)
    
    //----------------------------Balance---------------------------------------
    // Display balance in balance Display section

    // const balanceDisplay = innerTextById('balance')
    const balanceDisplay = document.getElementById('balance')
    balanceDisplay.innerText = balance.toFixed(2)


    //----------------------------Remaining Balance-----------------------------

    //----------- Show Result section when click Calculate Button --------------
 
    // const resultSection = inputFieldGetById('results')
    const result = document.getElementById("results");
    result.classList.remove("hidden");

    

})




// Saving Ammount Calculatio

document.getElementById('calculate-savings').addEventListener('click', function(){
    const income = inputFieldGetById('income')
    const softwareExpenses = inputFieldGetById('software')
    const courseExpenses = inputFieldGetById('courses')
    const internetExpenses = inputFieldGetById('internet')

    // Calculation
    const totalExpenses = softwareExpenses + courseExpenses + internetExpenses
    const balance = income - totalExpenses;


    //----------------------------Saving Amount---------------------------------
    const savingAmoutParsentage = inputFieldGetById('savings')
    const savingAmout = (savingAmoutParsentage * balance) / 100

    //----------------------------Display Saving Amount-------------------------
    const savingAmountDisplay = document.getElementById('savings-amount')
    savingAmountDisplay.innerText = savingAmout.toFixed(2)

    //----------------------------Remaining Balance-----------------------------
    const remainingBalance = balance - savingAmout

    //----------------------------Display Remaining Balance---------------------
    const remainingBalanceDisplay = document.getElementById('remaining-balance')
    remainingBalanceDisplay.innerText = remainingBalance.toFixed(2)




})


// Tab Btn handler
const assistantTab = document.getElementById('assistant-tab')
const historyTab = document.getElementById('history-tab')


// Assistant Tab Button
document.getElementById('assistant-tab').addEventListener('click', function(){
    showSectionById('expense-form')

    // Add Class in History Tab Btn
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    // Remove Class From Assistan Tab Btn
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

})

// History Tab Button
document.getElementById('history-tab').addEventListener('click', function(){
    showSectionById('history-section')
    // Add Class in History Tab Btn
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    // Remove Class From Assistan Tab Btn
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
})
