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

function createProduct(e) {
  const row = e.currentTarget.parentNode.parentNode
  const name = row.querySelector("#name").value
  const price = row.querySelector("#price").value
  const table = document.getElementById("table")

  let product = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `

  table.innerHTML += product

  let removeButtons = table.querySelectorAll(".btn-remove")
  
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const newNameInput = document.getElementById('name')
  const newPriceInput = document.getElementById('price')

  newNameInput.value = ""
  newPriceInput.value = ""
 

  console.log("creating product", table)
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeProducButtons = document.querySelectorAll(".btn-remove")

  for (let i = 0; i < removeProducButtons.length; i++) {
    removeProducButtons[i].addEventListener('click', removeProduct)
  }

  let createProductButton = document.getElementById("create")

  createProductButton.addEventListener('click', createProduct)
  //... your code goes here
});