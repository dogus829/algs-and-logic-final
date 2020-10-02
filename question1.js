// Write a function that takes in a name and an age as arguments,
// and returns a sentence containing both pieces of info
// ex. ('Jenny', 71) --> "Jenny is 71 years old!"

const nameAndAge = function (name, age) {
    return name + ' is ' + age + ' years old.'
};

console.log(nameAndAge("John", 27));

console.log(nameAndAge("Mary", 67));