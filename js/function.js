
// Function for all Input Get By ID

function inputFieldGetById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue

}

// Function for all innerText Get By ID
function innerTextById(id){
    const innerText = parseFloat(document.getElementById(id).innerText)
    return innerText
}


// button Click hide section and show section

function showSectionById(id){
    //Hide all section
    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    //Show the section
    document.getElementById(id).classList.remove('hidden')
}

//----------------------------------------------------------------------
