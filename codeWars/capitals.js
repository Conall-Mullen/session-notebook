const mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

// I want to form a sentence, "The CAPITAL of COUNTRY/STATE is CAPITAL.VALUE"
// The "is CAPITAL.VALUE" part can be read via object dot notation
// I could use booleans to say whether to read the country or state value

function capital(capitals) {
  const sentences = capitals.map((capital, index) => {
    return `The capital of ${capital.state || capital.country} is ${
      capital.capital
    }`;
  });
  console.log(sentences);
  return sentences;
}

capital(mixed_capitals);
