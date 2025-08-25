// JavaScript Fundamentals Demo
// Simple examples of variables, functions, loops, and DOM manipulation

// ===========================
// PART 1: VARIABLES AND CONDITIONALS
// ===========================

// Variables for storing user data
let currentAge = 0;
let currentScore = 0;

// Function to check age category
function checkAge() {
  // Get input value and store in variable
  let ageInput = document.getElementById('ageInput');
  let ageResult = document.getElementById('ageResult');

  currentAge = parseInt(ageInput.value);

  // Use conditionals to determine age category
  if (currentAge < 1 || isNaN(currentAge)) {
    ageResult.textContent = 'Please enter a valid age!';
  } else if (currentAge < 13) {
    ageResult.textContent = 'You are a child.';
  } else if (currentAge < 18) {
    ageResult.textContent = 'You are a teenager.';
  } else if (currentAge < 65) {
    ageResult.textContent = 'You are an adult.';
  } else {
    ageResult.textContent = 'You are a senior.';
  }

  console.log('Age checked:', currentAge);
}

// Function to calculate grade
function calculateGrade() {
  let scoreInput = document.getElementById('scoreInput');
  let gradeResult = document.getElementById('gradeResult');

  currentScore = parseInt(scoreInput.value);
  let grade = '';

  // Conditional statements for grade calculation
  if (currentScore < 0 || currentScore > 100 || isNaN(currentScore)) {
    gradeResult.textContent = 'Please enter a score between 0 and 100!';
    return;
  }

  if (currentScore >= 90) {
    grade = 'A';
  } else if (currentScore >= 80) {
    grade = 'B';
  } else if (currentScore >= 70) {
    grade = 'C';
  } else if (currentScore >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  gradeResult.textContent = 'Score: ' + currentScore + ' - Grade: ' + grade;
  console.log('Grade calculated:', grade);
}

// ===========================
// PART 2: FUNCTIONS
// ===========================

// Function 1: Calculator function
function calculate() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result = document.getElementById('calcResult');

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = 'Please enter valid numbers!';
    return;
  }

  let sum = addNumbers(num1, num2);
  result.textContent = num1 + ' + ' + num2 + ' = ' + sum;
}

// Separate function for addition (reusable)
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Text formatting function
function formatText() {
  let textInput = document.getElementById('textInput');
  let textResult = document.getElementById('textResult');
  let text = textInput.value;

  if (text === '') {
    textResult.textContent = 'Please enter some text!';
    return;
  }

  let formatted = formatString(text);
  textResult.textContent = 'Uppercase: ' + formatted.upper + ' | Lowercase: ' + formatted.lower;
}

// Separate formatting function (reusable)
function formatString(str) {
  return {
    upper: str.toUpperCase(),
    lower: str.toLowerCase()
  };
}

// ===========================
// PART 3: LOOPS
// ===========================

// Loop Example 1: Creating a number list with for loop
function createNumberList() {
  let numberCount = parseInt(document.getElementById('numberCount').value);
  let numberResult = document.getElementById('numberResult');

  if (isNaN(numberCount) || numberCount < 1 || numberCount > 10) {
    numberResult.textContent = 'Please enter a number between 1 and 10!';
    return;
  }

  let numbers = '';

  // For loop to create number list
  for (let i = 1; i <= numberCount; i++) {
    numbers += i + ' ';
  }

  numberResult.textContent = 'Numbers: ' + numbers;
  console.log('Created number list with for loop');
}

// Loop Example 2: Processing array with while loop
function processArray() {
  let arrayResult = document.getElementById('arrayResult');
  let numbers = [2, 4, 6, 8, 10];
  let doubled = [];
  let i = 0;

  // While loop to double each number
  while (i < numbers.length) {
    doubled.push(numbers[i] * 2);
    i++;
  }

  arrayResult.textContent = 'Original: [' + numbers.join(', ') + '] | Doubled: [' + doubled.join(', ') + ']';
  console.log('Processed array with while loop');
}

// ===========================
// PART 4: DOM MANIPULATION
// ===========================

// DOM Manipulation 1: Adding and removing items
function addItem() {
  let itemInput = document.getElementById('itemInput');
  let itemList = document.getElementById('itemList');
  let text = itemInput.value;

  if (text === '') {
    alert('Please enter an item!');
    return;
  }

  // Create new element
  let newItem = document.createElement('span');
  newItem.className = 'item';
  newItem.textContent = text;

  // Add click event to remove item
  newItem.onclick = function () {
    this.remove();
  };

  // Add to list
  itemList.appendChild(newItem);
  itemInput.value = '';

  console.log('Added item:', text);
}

function clearItems() {
  let itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  console.log('Cleared all items');
}

// DOM Manipulation 2: Changing styles
function changeColor() {
  let colorBox = document.getElementById('colorBox');
  colorBox.classList.toggle('red');
  console.log('Changed color');
}

function changeSize() {
  let colorBox = document.getElementById('colorBox');
  colorBox.classList.toggle('big');
  console.log('Changed size');
}

function toggleVisibility() {
  let colorBox = document.getElementById('colorBox');
  colorBox.classList.toggle('hidden');
  console.log('Toggled visibility');
}

// DOM Manipulation 3: Counter with event handling
let count = 0;

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}

function updateCounter() {
  let counter = document.getElementById('counter');
  counter.textContent = count;
  console.log('Counter updated to:', count);
}

// Simple message when page loads
console.log('JavaScript loaded! Ready to demonstrate fundamentals.');
