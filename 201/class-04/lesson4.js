const coffees = [
  'drip',
  'French Press',
  'caramel latte',
  'capuccino',
  'macchiato',
  'espresso',
];

function pluralize(wordToBePluralized) {
  return wordToBePluralized + 's';
}

function printPluralizedCoffees() {
  for (let i = 0; i < coffees.lenght; i++) {
    if (coffees[i][coffees[i].length - 1] !== 's') {
      console.log(pluralize(coffees[i]));
    }
  }
}

printPluralizedCoffees();
