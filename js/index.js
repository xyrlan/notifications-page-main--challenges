
const elemento = document.querySelectorAll('#unreaded, #unreaded2, #unreaded3, #unreaded4, #unreaded5, #unreaded6, #unreaded7, #isso #isso2 #isso3 #isso4 #isso5 #isso6 #isso7');
const allreadeds = document.querySelector('#allreaded');
const minhaClasse = document.querySelectorAll('.bg-light-blue')
const issoCheck = document.querySelectorAll('isso, isso2, isso3, isso4, isso5, isso6, isso7')
var numClasses = 7
const notificationsNum = document.getElementById('notificationsNumber')
notificationsNum.textContent = `${numClasses}`

function contarClasses() {

var numClasses = minhaClasse.length;
const notificationsNum = document.getElementById('notificationsNumber')
notificationsNum.innerHTML = `${numClasses}`
}



elemento.forEach((unreaded, indice)=> { 
const issos = document.getElementById('isso');
    
    issos.addEventListener('click', () => {
        issos.classList.remove('bg-light-blue');
        const unreadeds = document.getElementById('unreaded');
        unreadeds.classList.add('hidden');
        
        numClasses--;
        notificationsNum.innerHTML = 6

        
        
    })
    const issos2 = document.getElementById('isso2');
    issos2.addEventListener('click', () => {
        issos2.classList.remove('bg-light-blue');
        const unreadeds2 = document.getElementById('unreaded2');
        unreadeds2.classList.add('hidden');
        notificationsNum.innerHTML = 5 
    })  
    const issos3 = document.getElementById('isso3');
    issos3.addEventListener('click', () => {
        issos3.classList.remove('bg-light-blue');
        const unreadeds3 = document.getElementById('unreaded3');
        unreadeds3.classList.add('hidden');
        notificationsNum.innerHTML = 4
    })  
    const issos4 = document.getElementById('isso4');
    issos4.addEventListener('click', () => {
        issos4.classList.remove('bg-light-blue');
        const unreadeds4 = document.getElementById('unreaded4');
        unreadeds4.classList.add('hidden') 
        notificationsNum.innerHTML = 3
    })  
    const issos5 = document.getElementById('isso5');
    issos5.addEventListener('click', () => {
        issos5.classList.remove('bg-light-blue');
        const unreadeds5 = document.getElementById('unreaded5');
        unreadeds5.classList.add('hidden') 
        notificationsNum.innerHTML = 2
    })  
    const issos6 = document.getElementById('isso6');
    issos6.addEventListener('click', () => {
        issos6.classList.remove('bg-light-blue');
        const unreadeds6 = document.getElementById('unreaded6');
        unreadeds6.classList.add('hidden') 
        notificationsNum.innerHTML = 1
    })  
    const issos7 = document.getElementById('isso7');
    issos7.addEventListener('click', () => {
        issos7.classList.remove('bg-light-blue');
        const unreadeds7 = document.getElementById('unreaded7');
        unreadeds7.classList.add('hidden') 
        notificationsNum.innerHTML = 0
    })



    
    allreadeds.addEventListener('click', () => {
    
        issos.classList.remove('bg-light-blue');
        const unreadeds = document.getElementById('unreaded');
        unreadeds.classList.add('hidden')
    
    const issos2 = document.getElementById('isso2');
    
        issos2.classList.remove('bg-light-blue');
        const unreadeds2 = document.getElementById('unreaded2');
        unreadeds2.classList.add('hidden') 
      
    const issos3 = document.getElementById('isso3');
    
        issos3.classList.remove('bg-light-blue');
        const unreadeds3 = document.getElementById('unreaded3');
        unreadeds3.classList.add('hidden') 
     
    const issos4 = document.getElementById('isso4');
    
        issos4.classList.remove('bg-light-blue');
        const unreadeds4 = document.getElementById('unreaded4');
        unreadeds4.classList.add('hidden') 
    
    const issos5 = document.getElementById('isso5');
    
        issos5.classList.remove('bg-light-blue');
        const unreadeds5 = document.getElementById('unreaded5');
        unreadeds5.classList.add('hidden') 
    
    const issos6 = document.getElementById('isso6');
    
        issos6.classList.remove('bg-light-blue');
        const unreadeds6 = document.getElementById('unreaded6');
        unreadeds6.classList.add('hidden') 
    
    const issos7 = document.getElementById('isso7');
    
        issos7.classList.remove('bg-light-blue');
        const unreadeds7 = document.getElementById('unreaded7');
        unreadeds7.classList.add('hidden') 

        notificationsNum.innerHTML = 0
    })
})


        

        
        

        





