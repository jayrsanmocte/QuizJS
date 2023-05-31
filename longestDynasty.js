const dynastyReign = [
  ["San Dynasty", "MXLI"],
  ["Viloria Dynasty", "MCCCIIII"],
  ["Tan Dynasty", "MCCCXCVIII"],
  ["Bon Dynasty", "MCDXLV"],
  ["Maiko Dynasty", "MDCLXIV"],
  ["Paul Dynasty", "MCMXLIX"],
  ["Andre Dynasty", "MMMXICX"]
];

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestReign = 0;
  let longestDynastyName = "";

  for (const [dynasty, year] of dynastyReign) {
    const startYear = convertYear(year);
    if (startYear !== "Invalid") {
      const reignLength = startYear - 1000;
      if (reignLength > longestReign) {
        longestReign = reignLength;
        longestDynastyName = dynasty;
      }
    }
  }

  return longestDynastyName;
}

function convertYear(year) {
  const numeralValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
    
  };

  let result = 0;
  let i = 0;

  while (i < year.length) {
    const currentNumeral = year[i];
    const currentValue = numeralValues[currentNumeral];
    const nextNumeral = year[i + 1];
    const nextValue = numeralValues[nextNumeral];

    if (nextValue && currentValue < nextValue) {
      result += nextValue - currentValue;
      i += 2;
    } else {
      result += currentValue;
      i += 1;
    }
  }

  if (result > 0) {
    return result;
  } else {
    return "Invalid";
  }
}

console.log(longestDynasty(dynastyReign));

console.log(
  convertYear("MXLI"),
  convertYear("MCCCIII"),
  convertYear("MCCCXCVIII"),
  convertYear("MCDXLV"),
  convertYear("MDCLXIV"),
  convertYear("MCMXLIX"),
  convertYear("MMMXICXI")
);
console.log(convertYear("ASDASD"));