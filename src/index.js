// ITERATION 1 

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const sub = price.innerHTML * quantity.value

  subtotal.innerHTML = sub

  return sub
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let sum = 0;

  const products = document.querySelectorAll('.product')
  for(let i = 0; i <products.length; i++){
    const singleSubTotal = updateSubtotal(products[i])
    sum += singleSubTotal;
  }


  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('h2 span')
  total.innerHTML = sum;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let removeTarget = target.parentNode.parentNode.parentNode;
  removeTarget.removeChild(target.parentNode.parentNode);

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(element => {
  element.addEventListener('click', removeProduct);
  })
});

