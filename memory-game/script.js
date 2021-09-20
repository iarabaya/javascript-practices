const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
  this.classList.toggle('flip');

  if(!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;
  }else{
    hasFlippedCard = false;
    secondCard = this;
    
    //do cards match?
   if(firstCard.dataset.framework === secondCard.dataset.framework){
    //they match 
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click', flipCard);
   }else{
     //not match
     setTimeout(()=>{
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
     }, 1500);   
   }
  }
}


cards.forEach(card => card.addEventListener('click',flipCard))