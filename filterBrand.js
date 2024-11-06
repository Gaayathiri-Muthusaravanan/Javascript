const products = [
    {
      productId: "1",
      productDesc: "Apple iPhone 12",
      brand: "Apple",
      price: 40000,
    },
    {
      productId: "2",
      productDesc: "Apple iPhone 11",
      brand: "Apple",
      price: 30000,
    },
    {
      productId: "3",
      productDesc: "Samsung Galaxy S2",
      brand: "Samsung",
      price: 35000,
    },
    {
      productId: "4",
      productDesc: "Samsung Galaxy S3",
      brand: "Samsung",
      price: 45000,
    },
    {
      productId: "5",
      productDesc: "Motorola Edge G45",
      brand: "Motorola",
      price: 15000,
    },
    {
      productId: "6",
      productDesc: "Apple iPhone 15",
      brand: "Apple",
      price: 50000,
    },
    {
      productId: "7",
      productDesc: "Apple Macbook M1 Pro",
      brand: "Apple",
      price: 90000,
    },
    {
      productId: "8",
      productDesc: "Oppo A15",
      brand: "Oppo",
      price: 10000,
    },
  ];
   

  const productList = document.getElementById("productList");
  const brandFilter = document.getElementById("brandFilter");
  const filterByPrice = document.getElementById("filterByPrice")
  const filteredOptions = [];
  const ul = document.createElement("ul");
  
  ul.id = "products";
  productList.appendChild(ul);

  function renderProducts(productsArray){

    ul.textContent = "";
    productsArray.map(({productDesc}) => {
       
        const list = document.createElement("li");
        list.textContent = productDesc;
        ul.appendChild(list);
    });
  }
  function renderProductsByBrand(filter){
    const filteredProducts = filter.map((brandName) => {
        return products.filter((product) => product.brand == brandName );
    });
    renderProducts(filteredProducts.flat())
  }

  //renderProducts(products);

  const brands = products.map((product)=> product.brand);
  const uniqueBrands = [...new Set(brands)];
  
  uniqueBrands.map((brandName)=>{
    const filterOptionDiv1 = `<div>
    <input class = 'filterInput' id = ${brandName} type = checkbox />
    <label for = ${brandName}>${brandName}</label>
    </div>`;
    brandFilter.innerHTML += filterOptionDiv1;
    attachEventListener();
  });
  const price = products.map((product)=>product.price);
  
  

  
  function attachEventListener(){
    const inputs = document.querySelectorAll(".filterInput");
    inputs.forEach((element)=>{
        element.addEventListener("change",(e)=>{
            e.target.checked
            ?filteredOptions.push(e.target.id)
            :filteredOptions.splice(filteredOptions.indexOf(e.target.id),1);
            renderProductsByBrand(filteredOptions);
        });
    });
  }

  const filterByPriceDiv = `<div>
  <input class = 'filterByPrice' id = price1 value = "<10000" name = filterByPrice type = radio />
  <label for = price1>Less than 10000</label>
  <input class = 'filterByPrice' id = price2 value = "10000-30000" name = filterByPrice type = radio />
  <label for = price2>10000 to 30000</label>
  <input class = 'filterByPrice' id = price3 value = ">30000" name = filterByPrice type = radio />
  <label for = price3>More than 30000</label>
  </div>`;
  filterByPrice.innerHTML = filterByPriceDiv;

priceEventListener();

function priceEventListener() {
    const input = document.querySelectorAll(".filterByPrice");
    input.forEach((e)=>{
        e.addEventListener("change", ()=>{
            renderProductByPrice(e.value)
        })
    })
}

function renderProductByPrice(val) {
    console.log(val)
    const prices =[];
    products.map((element)=> {
        if(val == "<10000") {
           if(element.price <= 10000) {
               prices.push(element);
           }
        } else if(val == "10000-30000") {
            if(element.price > 10000 && element.price < 30000) {
                prices.push(element);
            }
        } else {
            
            if(element.price > 30000) {
                prices.push(element)
            }
        }
        
    })
    renderProducts(prices);
}