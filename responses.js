let userName = "";

function getBotResponse(input) {
  //["hi", "hello"]
  const greetings = [
    "hi",
    "hello",
    "hey",
    "hey hey",
    "whatsup",
    "hii",
    "hello hi",
    "hi hello",
  ];
  const responses = [
    "Whatsup bro<br><img src='asset/emote.gif' alt='' width='50' height='50'>",
    "Hello dear<br><img src='asset/emote.gif' alt='' width='50' height='50'>",
    "Hello, Nice to meet you...<br><img src='asset/emote.gif' alt='' width='50' height='50'>",
  ];
  const OkResponses = ["Cool😎", "Ok dear👍", "Good dear👍"];

  // Simple responses
  if (!userName) {
    userName = input; // Set user's name
    return (
      "Hello " +
      userName +
      ", Welcome to the Brew Cafe...😊. How can I help you today?"
    );
  } else if (input == "❤️") {
    return "<img src='asset/heart2.gif' alt='' width='50' height='50'>";
  } else if (input.toLowerCase().includes("ok")) {
    return OkResponses[Math.floor(Math.random() * responses.length)];
  } else if (input.toLowerCase().includes("menu")) {
    return (
      "<img src='asset/mglogo.jpg' alt='' width='250' height='250'<br><br>Hello " +
      userName +
      ", Welcome to the Brew Cafe<br>This is our menu. If you want know more details, Please mention food name.<br><br>1.Burgers<br><br>2.Coffee<br><br>3.Pizza"
    );
  } else if (input.toLowerCase().includes("burgers")) {
    return (
      "<img src='asset/b_banner.jpg' alt='' width='426' height='240'<br><br>Dear " +
      userName +
      ", We have various kinds of burgers. If you want to know more details, please mention the each burger name.<br><br>1.Cheese Burger<br><br>2.Crispy Chicken Burger<br><br>3.Vegetable Burger<br><br>4.Hamburger<br><br>5.Sandwich Burger"
    );
  } else if (input.toLowerCase().includes("cheese burger")) {
    return (
      "<img src='burgers/cb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cheese Burger.<br><br>Ingredients👉<br>⚫ Cheese Layer 2x<br>⚫ Fish Patties 1x<br>⚫ Tomato Slices 2x<br>⚫ Onion<br>⚫ Lettuce Leaves<br><br>Total Price = LKR.950.00"
    );
  }
}
