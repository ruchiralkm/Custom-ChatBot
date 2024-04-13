let userName = "";

function getBotResponse(input) {
  // Simple responses
  if (input.toLowerCase().includes("hi")) {
    return "Good";
  } else if (input.toLowerCase().includes("age")) {
    return "I am 22.";
  } else if (input.toLowerCase().includes("name")) {
    userName = input;
    return "I am Eva, What is your name?";
  } else if (!userName) {
    userName = input; // Set user's name
    return "Hello " + userName;
  } else if (input.toLowerCase().includes("bye")) {
    return `Good bye ${userName}`;
  } else {
    return "Invalid";
  }
}
