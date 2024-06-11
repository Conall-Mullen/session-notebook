function valid(string) {
  // loop through string
  // if '(' add 1 if ')' subtract 1
  // if negative value, string is false
  // if value is greater than 0 at the end string is false
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      count++;
    } else if (string[i] === ")") {
      count--;
    }
  }

  if (count !== 0) {
    return "invalid";
  } else {
    return "valid";
  }
}

console.log(valid(")("));
