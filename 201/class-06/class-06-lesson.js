// Primitive Data Types
// string, number, boolean

// JavaScript Objects

// key-value pairs
// properties-values

// Object literal notation

var demi = {
  name: 'Demi',
  isAGoodDog: true,
  numberOfLegs: 3,
  siblings: [
    'BuddyCat',
    'Trillian',
    'Aloysius',
    'Agador Spartacus'
  ],
  address: {
    street: '123 Dog Street',
    city: 'Seattle',
    state: 'Washington',
    zipcode: '98116',
  },
  colors: [
    'black',
    'white'
  ],
  breed: 'Border Collie',
}

var preferredProp = 'siblings';

for (let i = 0; i < demi.siblings.length; i++){
  console.log(demi.siblings[i]);
}

for (let i in demi.siblings) {
  console.log(demi.siblings[i]);
}

var agador = {};

agador.name = 'Agador Spartacus';
agador.species = 'feline';
agador.paws = 4;
agador.isASweetKitten = true;
