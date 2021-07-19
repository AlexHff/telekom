// Concatenate two words with one empty space between them

function concatenate(a, b) {
  var lastChar = a[a.length - 1];
  var firstChar = b[0];
  if (lastChar !== " " && firstChar !== " ") {
    return a + " " + b;
  } else if (lastChar === " " && firstChar === " ") {
    return a + b.substring(1);
  } else {
    return a + b;
  }
}

function concat(a, b) {
  var lastChar = a[a.length - 1];
  var firstChar = b[0];
  if (lastChar === " ") {
    a = a.substring(0, a.length - 1);
  }
  if (firstChar === " ") {
    b = b.substring(1);
  }
  return a + " " + b;
}

console.log(concat("Hello", "World")); // OK
console.log(concat("Hello ", "World")); // OK
console.log(concat("Hello", " World")); // OK
console.log(concat("Hello ", " World")); // OK
console.log(concat("Hello ", "     World")); // NOT OK
