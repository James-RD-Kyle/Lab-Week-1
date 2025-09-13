"use strict";

// sample data - expanded Star Wars characters with varied ages
const USERS = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const USERS_ERROR = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, pancakes: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, pancakes: "Padmé Amidala", age: 27 },
];
// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

// While I was reviewing the class website I noticed that as this is an array I can use a forEach method 
// to loop through the array and get the names of each character. It was something I didn't know about beforehand.
// I then made a "li" element using document.createElement and set the textContent to the user.name 
// (user being each individual name on the array and name being the property name of the string).
// I then used getElementById to find 'names-list' and appended the "li" element that I created to it.
USERS.forEach(user => {
  console.log(user.name);
  const li = document.createElement('li');
  li.textContent = user.name;
  document.getElementById('names-list').appendChild(li);
});
// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

// Same concept as above just I checked for any user whose age was less than 40 using an if statement.
USERS.forEach(user => {
  if (user.age < 40) {
    console.log(user.name);
    const li = document.createElement('li');
    li.textContent = user.name;
    document.getElementById('young-characters-list').appendChild(li);
  }
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

// Same concept but with function that is interchangable with different arrays :)
logicNamesList(USERS)

function logicNamesList(array) {
  array.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    document.getElementById('function-list').appendChild(li);
  });
}
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

//Age filter but is interchangable with different arrays
ageFilteredList(USERS, 30)

function ageFilteredList(array, filteredAge) {
  array.forEach(user => {
    if (user.age < filteredAge) {
      const li = document.createElement('li');
      li.textContent = user.name;
      document.getElementById('age-filter-list').appendChild(li);
    }
  })
}

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

//This one was a challenge for me. Should be straight forward though, it first try catchs for errors it catches it then console logs it.
//Displays success if there is no errors
errorHandlingFunction(USERS);

function errorHandlingFunction(array) {

  let haderror = false

  array.forEach((user, index) => {
    try {
      if (user.name === undefined) { throw `Object at Index ${index} does not have a "name" property`; }
      const li = document.createElement('li');
      li.textContent = user.name;
      document.getElementById('error-handling-list').appendChild(li);
    }
    catch (error) {
      console.log("ERROR:" + error);
      const li = document.createElement('li');
      li.className = "error-message";
      li.textContent = "ERROR: " + error;
      document.getElementById('error-messages').appendChild(li);
      let haderror = True
    }
  });
  if (!haderror) {
    const li = document.createElement('li');
    li.className = "success";
    li.textContent = "No Errors Found";
    document.getElementById('error-messages').appendChild(li);
  }
}
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

//Same concept just is with an array that has Pancakes as a property instead of name
errorHandlingFunction2(USERS_ERROR);

function errorHandlingFunction2(array) {
  array.forEach((user, index) => {
    try {
      if (user.name === undefined) { throw `Object at Index ${index} does not have a "name" property`; }
      const li = document.createElement('li');
      li.textContent = user.name;
      document.getElementById('broken-array-list').appendChild(li);
    }
    catch (error) {
      console.log("ERROR:" + error);
      const li = document.createElement('li');
      li.className = "error-message";
      li.textContent = "ERROR: " + error;
      document.getElementById('broken-array-errors').appendChild(li);
    }
    if (document.getElementById('broken-array-errors').innerHTML === "") {
      const li = document.createElement('li');
      li.className = "success";
      li.textContent = "No Errors Found";
      document.getElementById('error-messages').appendChild(li);
    }
  });
}