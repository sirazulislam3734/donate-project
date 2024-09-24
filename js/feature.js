document.getElementById('donation').addEventListener('click', function(){
    
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('donation-list').classList.remove('hidden');
    document.getElementById('history').classList.remove('bg-lime-300');

})


document.getElementById('history').addEventListener('click', function(){

    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');
    document.getElementById('donation').classList.remove('bg-lime-300');
})
