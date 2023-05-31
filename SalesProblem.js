const Productsample = [
    ["Product A", -75],
    ["Product B", -70],
    ["Product C", 95],
    ["Product D", 5],
    ["Product E", 88],
    ["Product F", 29],
  ];

 


function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let maxProfit = -Infinity;
    let topProduct = null;
  
    for (const [product, profit] of productProfitArray) {
      if (profit > maxProfit) {
        maxProfit = profit;
        topProduct = product;
      }
    }
  
    return topProduct;
  }
  
  function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let minProfit = Infinity;
    let bottomProduct = null;
  
    for (const [product, profit] of productProfitArray) {
      if (profit < minProfit) {
        minProfit = profit;
        bottomProduct = product;
      }
    }
  
    return bottomProduct;
  }
  
  function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let closestProfit = Infinity;
    let zeroProduct = null;
  
    for (const [product, profit] of productProfitArray) {
      if (Math.abs(profit) < Math.abs(closestProfit)) {
        closestProfit = profit;
        zeroProduct = product;
      } else if (Math.abs(profit) === Math.abs(closestProfit) && profit > 0) {
        closestProfit = profit;
        zeroProduct = product;
      }
    }
  
    return zeroProduct;
  }
  

 
  
  console.log("Top Product:", topProduct(Productsample));
  console.log("Bottom Product:", bottomProduct(Productsample));
  console.log("Zero Profit Product:", zeroProfitProduct(Productsample));