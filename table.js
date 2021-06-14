


  let products = [
    {
    name: "Product 1",
    price: 100.00,
    quantity: 1.0,
    operations: "x"
  }, // 0

    {
      name: "Product 2",
      price: 200.00,
      quantity: 2.0,
      operations: 
      `<button>&#8643;</button>
        <button>&#8638;</button>`
  }, // 1

    {
      name: "Product 3",
      price: 300.00,
      quantity: 3.0,
      operations: "x"
    
  }]

  function showProducts( list ){
    for(let i = 0; i < list.length; i++) {
        table.innerHTML += `
        <div class="row">
            <div class="name" >${list[i].name}</div>
            <div class="price">${list[i].price}</div>
            <div class="quantity">${list[i].quantity}</div>
            <div class="operation">${list[i].operations}</div>
        </div>
        `
    }
}

showProducts( products )


let p = document.getElementsByClassName('row');
let bt = document.getElementsByTagName('BUTTON')

   function moveOneUp(){
    
    p[1].append(p[0])
  }

  function moveOneDown(){
    p[2].append(p[1])
  }

  bt[1].onclick = moveOneUp
  bt[0].onclick = moveOneDown