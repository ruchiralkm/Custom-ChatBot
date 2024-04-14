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

    // -----------------burgers-------------------//
    // -----------------Menu-------------------//
  } else if (input.toLowerCase().includes("burger")) {
    return (
      "<img src='asset/b_banner.jpg' alt='' width='426' height='240'<br><br>Dear " +
      userName +
      ", We have various kinds of burgers. If you want to know more details, please mention the each burger name.<br><br>1.Cheese Burger<br><br>2.Crispy Chicken Burger<br><br>3.Vegetable Burger<br><br>4.Hamburger<br><br>5.Sandwich Burger"
    );
    // -----------------cheese burgers-------------------
  } else if (input.toLowerCase().includes("cheese burger")) {
    return (
      "<img src='burgers/cb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cheese Burger.<br><br>Ingredients👉<br>⚫ Cheese Layer 3x<br>⚫ Fish Patties 1x<br>⚫ Tomato Slices 2x<br>⚫ Onion<br>⚫ Lettuce Leaves<br><br>Total Price = LKR.950.00"
    );
    // -----------------crispy burgers-------------------
  } else if (input.toLowerCase().includes("crispy chicken")) {
    return (
      "<img src='burgers/ccb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Crispy Chicken Burger.<br><br>Ingredients👉<br>⚫ Crispy Chicken Pieces 1x<br>⚫ Cheese Layer 1x<br>⚫ Chicken Patties 1x<br>⚫ Lettuce Leaves<br><br>Total Price = LKR.1150.00"
    );
    // -----------------vegetable burgers-------------------
  } else if (input.toLowerCase().includes("vegetable burger")) {
    return (
      "<img src='burgers/vb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Vegetable Burger.<br><br>Ingredients👉<br>⚫ Cheese Layer 2x<br>⚫ Fish Patties 1x<br>⚫ Tomato Slices 3x<br>⚫ Onion<br>⚫ Lettuce Leaves<br>⚫ Cucumbers Slices 3x<br><br>Total Price = LKR.1250.00"
    );
    // -----------------hamburger-------------------
  } else if (input.toLowerCase().includes("hamburger")) {
    return (
      "<img src='burgers/hb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Hamburger.<br><br>Ingredients👉<br>⚫ Beef Patties 2x<br>⚫ Tomato Slices 3x<br>⚫ Onion<br>⚫ Lettuce Leaves<br>⚫ Ketchup Layer<br>⚫ Mayonnaise Layer<br><br>Total Price = LKR.1050.00"
    );
    // -----------------sandwich burgers-------------------
  } else if (input.toLowerCase().includes("sandwich burger")) {
    return (
      "<img src='burgers/sb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Sandwich Burger.<br><br>Ingredients👉<br>⚫ Beef Patties 2x<br>⚫ Cheese Layer 1x<br>⚫ Lettuce Leaves<br>⚫ Mushroom<br>⚫ Onion<br>⚫ Ketchup Layer<br><br>Total Price = LKR.1100.00"
    );
  }
  //-------------------Coffee------------------------//
  //-------------------Menu--------------------------//
  else if (input.toLowerCase().includes("coffee")) {
    return (
      "<img src='asset/c_banner.jpg' alt='' width='426' height='240'<br><br>Dear " +
      userName +
      ", We have various kinds of coffee. If you want to know more details, please mention the each coffee name.<br><br>1.Cheese Burger<br><br>2.Crispy Chicken Burger<br><br>3.Vegetable Burger<br><br>4.Hamburger<br><br>5.Sandwich Burger"
    );
  }
}
