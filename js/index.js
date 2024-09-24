document.getElementById('blog').addEventListener('click', function(){
    window.location.href ='./index-2.html';
})

let donation = document.getElementById('donation');
donation.addEventListener('click', function(){
 
donation.classList.add('bg-lime-300')    

})


let history = document.getElementById('history');
history.addEventListener('click', function(){

history.classList.add('bg-lime-300');
    
})

document.getElementById('donation-btn-1').addEventListener('click', function(){


    let noakhaliInput = allValue('noakhali-input-donation');
    let noakhaliDonation = allInnerText('noakhali-donation');
    let extraMoney = extraMoneyInnerText('extra-money');
    // let noakhaliInput = parseFloat(document.getElementById('noakhali-input-donation').value);
    // let noakhaliDonation = parseFloat(document.getElementById('noakhali-donation').innerText);  
    // let extraMoney = parseFloat(document.getElementById('extra-money').innerText);
    
    if(noakhaliInput <= 0 || isNaN(noakhaliInput)){
        alert('Invalid Donation Amount');
        return ;
    }
    else{
        alert('Congratulations sir we have received your donation, thank you so much for standing by the flood affected people')
    }
    
    
 
    let totalDonation = noakhaliInput + noakhaliDonation;
    let newDonationMoney = extraMoney - noakhaliInput;

    
    
    document.getElementById('noakhali-donation').innerText = totalDonation;
    document.getElementById('extra-money').innerText = newDonationMoney;

    let div = document.createElement('div');
    div.innerHTML = `
     <p class="font-bold mb-2">${noakhaliInput} Donate for Flood at Noakhali, Bangladesh. </p>
     <p>Date: ${new Date()} </p> 
    `
    div.classList.add('border')
    div.classList.add('my-style')
    document.getElementById('history-list-container').appendChild(div);

})
document.getElementById('donation-btn-2').addEventListener('click', function(){

    
    
    let feniInput = allValue('feni-input-donation');
    let feniDonation = allInnerText('feni-donation') ;
    let extraMoney = extraMoneyInnerText('extra-money');

    if(feniInput <= 0 || isNaN(feniInput)){
        alert('Invalid Donation Amount');
        return ;
    }
    else{
        alert('Congratulations sir we have received your donation, thank you so much for standing by the flood affected people');
    }
    

    let totalDonation = feniInput + feniDonation;
    let newDonationMoney = extraMoney - feniInput;

    
    
    document.getElementById('feni-donation').innerText = totalDonation;
    document.getElementById('extra-money').innerText = newDonationMoney;

    let div = document.createElement('div');
    div.innerHTML = `
     <p class="font-bold mb-2">${feniInput} Donate for Flood Relief in Feni,Bangladesh. </p>
     <p>Date: ${new Date()} </p> 
    `
    div.classList.add('border')
    div.classList.add('my-style')
    document.getElementById('history-list-container').appendChild(div);

})
document.getElementById('donation-btn-3').addEventListener('click', function(){

    let quotaInput = allValue('quota-input-donation')
    let quotaDonation = allInnerText('quota-donation') 
    let extraMoney = extraMoneyInnerText('extra-money');

    if(quotaInput <= 0 || isNaN(quotaInput)){
        alert('Invalid Donation Amount');
        return ;
    }
    else{
        alert('Congratulations sir we have received your donation, thank you so much for standing by the flood affected people');
        
    }

    

    let totalDonation = quotaInput + quotaDonation;
    let newDonationMoney = extraMoney - quotaInput;

    
    
    document.getElementById('quota-donation').innerText = totalDonation;
    document.getElementById('extra-money').innerText = newDonationMoney;

    let div = document.createElement('div');
    div.innerHTML = `
     <p class="font-bold mb-2">${quotaInput} Aid for Injured in the Quota Movement. </p>
     <p>Date: ${new Date()} </p> 
    `
    div.classList.add('border')
    div.classList.add('my-style')
    document.getElementById('history-list-container').appendChild(div); 


})