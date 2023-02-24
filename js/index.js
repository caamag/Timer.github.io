
const time = document.querySelector('#tempo'); 
const iniciar = document.querySelector('.Iniciar'); 
const pausar = document.querySelector('.Pausar'); 
const resetar = document.querySelector('.Resetar'); 


iniciar.addEventListener('click', function(e){
  clearInterval(timer); 
  time.innerHTML = '00:00:00'; 
  pontoInicial = 0; 
  contador(); 
  time.classList.remove('pausado'); 

}); 



pausar.addEventListener('click', function(e){
  clearInterval(timer); 
  time.classList.add('pausado'); 
  iniciar.innerHTML = 'Retomar'; 
  
}); 



resetar.addEventListener('click', function(e){
clearInterval(timer); 
time.innerHTML = '00:00:00'; 
pontoInicial = 0; 
time.classList.remove('pausado'); 
iniciar.innerHTML = 'Iniciar'; 
  
}); 


let pontoInicial = 0; 
let timer; 

function getSegundo (pontoInicial) {
const data = new Date(pontoInicial * 1000);
return data.toLocaleTimeString('pt-br', {
hour12: false, 
timeZone: 'gmt'
  }); 
}; 


function contador() {
timer = setInterval(function(){
  pontoInicial++; 
  time.innerHTML = getSegundo(pontoInicial); 
  }, 1000); 
}; 