// Exersice 1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))

//Exercise 2
const isAdult = (age) => {
  if (age >= 21) {
    return 'Adult'
  } else {
    return 'mainr'
  }
}
console.log('Exercise 2 Result:', isAdult(21))

//Exercise 3
const isCharAVowel = (character) => {
  if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u'
  ) {
    return 'true'
  } else {
    return 'false'
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'))

//Exercise 4
const generateEmail = (Name, domain) => {
  return Name + '@' + domain
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

//Exercise 5
const greetUser = (name, tod) => {
  return `${name}, ${tod}`
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

//Exercise 6
const maxOfThree = (a, b, c) => {
  return Math.max(a, b, c)
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

//Exercise 7
const calculateTip = (bill, tip) => {
  return (bill * tip) / 100
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

//Exercise 8
const convertTemperature = (temperature, scale) => {
  if (scale === 'C') {
    return temperature
  } else if (temperature === 'F') {
    return scale
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

//Exercise 9
const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case 'add':
      return num1 + num2
    case 'subtract':
      return num1 - num2
    case 'multiply':
      return num1 * num2
    case 'divide':
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed'
      }
      return num1 / num2
    default:
      return 'Error: Invalid operation'
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract')) // Output: 5

// Exercise 10
const calculateGrade = (score) => {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}
console.log('Exercise 10 Result:', calculateGrade(85)) // Output: B

//Exercise 11
const createUsername = (firstName, lastName) => {
  const firstPart = firstName.slice(0, 3)
  const secondPart = lastName.slice(0, 3)
  const totalLength = firstName.length + lastName.length
  return firstPart + secondPart + totalLength
}
console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'))
