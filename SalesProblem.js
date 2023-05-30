const sampleData = [
    ["Product A", 500],
    ["Product B", -200],
    ["Product C", 100],
    ["Product D", -100],
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
  

 
  
  console.log("Top Product:", topProduct(sampleData));
  console.log("Bottom Product:", bottomProduct(sampleData));
  console.log("Zero Profit Product:", zeroProfitProduct(sampleData));