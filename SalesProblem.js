let productProfitArray = [
  { name: "Product A", profit: -5 },
  { name: "Product B", profit: 5 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 84 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 44 },
];

function findTopProduct(products) {
  if (products.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = null;

  for (const { name, profit } of products) {
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = name;
    }
  }

  return topProduct;
}

function findBottomProduct(products) {
  if (products.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = null;

  for (const { name, profit } of products) {
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = name;
    }
  }

  return bottomProduct;
}

function findZeroProfitProduct(products) {
  if (products.length === 0) {
    return "No Data";
  }

  let closestProfit = Infinity;
  let zeroProfitProduct = null;

  for (const { name, profit } of products) {
    if (Math.abs(profit) < Math.abs(closestProfit)) {
      closestProfit = profit;
      zeroProfitProduct = name;
    } else if (Math.abs(profit) === Math.abs(closestProfit) && profit > 0) {
      closestProfit = profit;
      zeroProfitProduct = name;
    }
  }

  return zeroProfitProduct;
}


console.log("Top Product:", findTopProduct(productProfitArray));
console.log("Bottom Product:", findBottomProduct(productProfitArray));
console.log("Zero Profit Product:", findZeroProfitProduct(productProfitArray));

// console.log("Top Product:", findTopProduct([]));
// console.log("Bottom Product:", findBottomProduct([]));
// console.log("Zero Profit Product:", findZeroProfitProduct([]));


