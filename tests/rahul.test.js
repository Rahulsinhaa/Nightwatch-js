function greet(name) {
  // Check if a name is provided
  if (name) {
    // Use the provided name to create a greeting message
    var greeting = "Hello, " + name + "!";
    return greeting;
  } else {
    // If no name is provided, provide a generic greeting
    return "Hello, there!";
  }
}

// Call the function with a name
var userName = "John";
var result = greet(userName);
console.log(result); // Output: "Hello, John!"

// Call the function without a name
var result2 = greet();
console.log(result2); // Output: "Hello, there!"
