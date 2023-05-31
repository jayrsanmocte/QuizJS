// const Productsample = [
//     ["Product A", -75],
//     ["Product B", -70],
//     ["Product C", 95],
//     ["Product D", 5],
//     ["Product E", 88],
//     ["Product F", 29],
//   ];

 

// function topProduct(productProfitArray) {
//     if (productProfitArray.length === 0) {
//       return "No Data";
//     }
  
//     let maxProfit = -Infinity;
//     let topProduct = null;
  
//     for (const [product, profit] of productProfitArray) {
//       if (profit > maxProfit) {
//         maxProfit = profit;
//         topProduct = product;
//       }
//     }
  
//     return topProduct;
//   }
  
//   function bottomProduct(productProfitArray) {
//     if (productProfitArray.length === 0) {
//       return "No Data";
//     }
  
//     let minProfit = Infinity;
//     let bottomProduct = null;
  
//     for (const [product, profit] of productProfitArray) {
//       if (profit < minProfit) {
//         minProfit = profit;
//         bottomProduct = product;
//       }
//     }
  
//     return bottomProduct;
//   }
  
//   function zeroProfitProduct(productProfitArray) {
//     if (productProfitArray.length === 0) {
//       return "No Data";
//     }
  
//     let closestProfit = Infinity;
//     let zeroProduct = null;
  
//     for (const [product, profit] of productProfitArray) {
//       if (Math.abs(profit) < Math.abs(closestProfit)) {
//         closestProfit = profit;
//         zeroProduct = product;
//       } else if (Math.abs(profit) === Math.abs(closestProfit) && profit > 0) {
//         closestProfit = profit;
//         zeroProduct = product;
//       }
//     }
  
//     return zeroProduct;
//   }
  

//   const emptyArray = [];

  
// console.log("Top Product:", topProduct(Productsample));
// console.log("Bottom Product:", bottomProduct(Productsample));
// console.log("Zero Profit Product:", zeroProfitProduct(Productsample));

// console.log("Top Product:", topProduct(emptyArray)); 
// console.log("Bottom Product:", bottomProduct(emptyArray)); 
// console.log("Zero Profit Product:", zeroProfitProduct(emptyArray)); 

const productSample = [
  ["Product A", -75],
  ["Product B", -70],
  ["Product C", 95],
  ["Product D", 5],
  ["Product E", 88],
  ["Product F", 29],
];

function findTopProduct(products) {
  if (products.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = null;

  for (const [product, profit] of products) {
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = product;
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

  for (const [product, profit] of products) {
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = product;
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

  for (const [product, profit] of products) {
    if (Math.abs(profit) < Math.abs(closestProfit)) {
      closestProfit = profit;
      zeroProfitProduct = product;
    } else if (Math.abs(profit) === Math.abs(closestProfit) && profit > 0) {
      closestProfit = profit;
      zeroProfitProduct = product;
    }
  }

  return zeroProfitProduct;
}

const emptyArray = [];





console.log("Top Product:", findTopProduct(productSample));
console.log("Bottom Product:", findBottomProduct(productSample));
console.log("Zero Profit Product:", findZeroProfitProduct(productSample));

console.log("Top Product:", findTopProduct([]));
console.log("Bottom Product:", findBottomProduct([]));
console.log("Zero Profit Product:", findZeroProfitProduct([]));