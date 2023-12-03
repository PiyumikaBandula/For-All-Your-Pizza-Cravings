let quantity = document.querySelector('.quantity');

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

let listCards = getLocalStorage();

function reloadCard(){
  let count = 0;
  listCards.forEach((value, key)=>{
    if (value) {
      count = count + value.quantity;
    }
      
  })
  quantity.innerText = count;
}
reloadCard();