// Function diye value use kora

function allValue (id){
    let subValue = parseFloat(document.getElementById(id).value);
    return subValue;
}


//Function diye innertext use kora
function allInnerText (id){
    let subDonation = parseFloat(document.getElementById(id).innerText);
    return subDonation;
}


function extraMoneyInnerText (id){
    let extraMoneyerInnerText = parseFloat(document.getElementById(id).innerText);
    return extraMoneyerInnerText;
}

// function showGetId(id){
//     document.getElementById('history-list').classList.add('hidden');
//     document.getElementById('donation-list').classList.add('hidden');
//     document.getElementById('donation').classList.add('bg-lime-300');
//     document.getElementById('history').classList.add('bg-lime-300');

//     document.getElementById(id).classList.remove('hidden');
// }