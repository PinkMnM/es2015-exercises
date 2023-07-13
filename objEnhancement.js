//Excercise 1

function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//es2015 version

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//Excercise 2

var favoriteNumber = 42;

var instructor = {
  firstName: 'Colt',
};

instructor[favoriteNumber] = 'That is my favorite!';

//es2015 version

let favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

//Excercise 3

var instructor = {
  firstName: 'Colt',
  sayHi: function () {
    return 'Hi!';
  },
  sayBye: function () {
    return this.firstName + ' says bye!';
  },
};

//es2015 version

const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says Bye !';
  },
};

//Excercise 4

const d = createAnimal('dog', 'bark', 'Wooooof!');
// {species: "dog", bark: f }
d.bark(); //"Wooooof!"

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaaa');
// {species: "sheep", bleet: f }
s.bleet(); //"BAAAaaaaa"

//es2015 version

function createAnimal(species, verb, noises) {
  return {
    species,
    [verb]() {
      return noises;
    },
  };
}
