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
      ", Welcome to the Brew Cafe<br>This is our menu. If you want know more details, Please mention food name.<br><br>1.Burgers<br><br>2.Coffees<br><br>3.Pizza<br><br>4.Desserts"
    );

    // -----------------burgers-------------------//
    // -----------------Menu-------------------//
  } else if (input.toLowerCase().includes("burgers")) {
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
  else if (input.toLowerCase().includes("coffees")) {
    return (
      "<img src='asset/c_banner.jpg' alt='' width='426' height='240'<br><br>Dear " +
      userName +
      ", We have various kinds of coffees. If you want to know more details, please mention the each coffee name.<br><br>1.Espresso<br><br>2.Cappuccino<br><br>3.Frappuccino<br><br>4.Iced Coffee<br><br>5.Black Coffee"
    );
    // -----------------espresso-------------------
  } else if (input.toLowerCase().includes("espresso")) {
    return (
      "<img src='coffees/ex_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Espresso Coffee.<br><br>Ingredients👉<br>⚫ Finely ground coffee beans<br>⚫ hot water<br><br>Total Price = LKR.250.00"
    );
    // -----------------cappuccino-------------------
  } else if (input.toLowerCase().includes("cappuccino")) {
    return (
      "<img src='coffees/c_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cappuccino Coffee.<br><br>Ingredients👉<br>⚫ Espresso shots<br>⚫ Steamed milk<br>⚫ Milk foam<br><br>Total Price = LKR.450.00"
    );
    // -----------------frappuccino-------------------
  } else if (input.toLowerCase().includes("frappuccino")) {
    return (
      "<img src='coffees/f_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Frappuccino Coffee.<br><br>Ingredients👉<br>⚫ Espresso shots<br>⚫ Milk<br>⚫ Ice cubes<br>⚫ Chocolate + Vanila cream<br>⚫ Whipped cream<br>⚫ Caramel + Sweets<br><br>Total Price = LKR.850.00"
    );
    // -----------------black-------------------
  } else if (input.toLowerCase().includes("black coffee")) {
    return (
      "<img src='coffees/b_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Black Coffee.<br><br>Ingredients👉<br>⚫ Brewing ground coffee beans<br>⚫ Hot water<br><br>Total Price = LKR.150.00"
    );
    // -----------------iced-------------------
  } else if (input.toLowerCase().includes("iced coffee")) {
    return (
      "<img src='coffees/i_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Iced Coffee.<br><br>Ingredients👉<br>⚫ Chilled coffee<br>⚫ Chocolate milk<br>⚫ Ice cubes<br><br>Total Price = LKR.300.00"
    );
  } //-------------------Pizza------------------------//
  //-------------------Menu--------------------------//
  else if (input.toLowerCase().includes("pizza")) {
    return (
      "<img src='asset/p_banner.jpg' alt='' width='426' height='240'<br><br>Dear " +
      userName +
      ", We have various kinds of pizzas. If you want to know more details, please mention the each pizza name.<br><br>1.Cheese Lover<br><br>2.Sausage Delight<br><br>3.Double Chicken<br><br>4.Spicy Veggie<br><br>5.Hot & Spicy"
    );
    // -----------------cheese lover-------------------
  } else if (input.toLowerCase().includes("cheese lover")) {
    return (
      "<img src='pizzas/c_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cheese Lover pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Mozzarella Cheese layers 3x<br><br>Total Price = LKR.1650.00"
    );
    // -----------------sausage delight-------------------
  } else if (input.toLowerCase().includes("sausage delight")) {
    return (
      "<img src='pizzas/s_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Sausage Delight pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Chicken sausages<br>⚫ Onions<br>⚫ Mozzarella Cheese layers 2x.<br><br>Total Price = LKR.1850.00"
    );
    // -----------------double chicken-------------------
  } else if (input.toLowerCase().includes("double chicken")) {
    return (
      "<img src='pizzas/d_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Double Chicken pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Spicy chicken<br>⚫ Succulent chicken sausages<br>⚫ Crunchy onions and capsicum<br>⚫ Mozzarella Cheese layers 1x<br><br>Total Price = LKR.1930.00"
    );
    // -----------------spicy veggie-------------------
  } else if (input.toLowerCase().includes("spicy veggie")) {
    return (
      "<img src='pizzas/sv_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Spicy Veggie pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Mushrooms, Tomatoes, Onions<br>⚫ Black olives and bell peppers<br>⚫ Mozzarella Cheese layers 2x.<br><br>Total Price = LKR.2300.00"
    );
    // -----------------hot & spicy-------------------
  } else if (input.toLowerCase().includes("hot & spicy")) {
    return (
      "<img src='pizzas/h_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Hot & Spicy pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Spicy chunks of chicken<br>⚫ Capsicums and Onions<br>⚫ Mozzarella Cheese layers 2x.<br><br>Total Price = LKR.1950.00"
    );
  } //-------------------Desserts------------------------//
  //-------------------Menu--------------------------//
  else if (input.toLowerCase().includes("dessert")) {
    return (
      "<img src='asset/d_banner.jpg' alt='' width='426' height='240'<br><br>Dear " +
      userName +
      ", We have various kinds of desserts. If you want to know more details, please mention the each desserts name.<br><br>1.Chocolate Lava<br><br>2.Choco Cup<br><br>3.Bliss Berry<br><br>4.Strawberry Mousse<br><br>5.Six Cups"
    );
    // -----------------chocolate lava-------------------
  } else if (input.toLowerCase().includes("chocolate lava")) {
    return (
      "<img src='desserts/cl_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Chocolate Lava Dessert.<br><br>Ingredients👉<br>⚫ Chocolate.<br>⚫ Cocoa powder<br>⚫ Eggs<br>⚫ Butter<br><br>Total Price = LKR.450.00"
    );
    // -----------------Choco Berry-------------------
  } else if (input.toLowerCase().includes("choco cup")) {
    return (
      "<img src='desserts/cc_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Choco Cup Dessert.<br><br>Ingredients👉<br>⚫ Chocolate cake<br>⚫ Chocolate cream<br>⚫ Whipped cream<br>⚫ Cherry<br><br>Total Price = LKR.350.00"
    );
    // -----------------Bliss Berry-------------------
  } else if (input.toLowerCase().includes("bliss berry")) {
    return (
      "<img src='desserts/bl_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Bliss Berry Dessert.<br><br>Ingredients👉<br>⚫ Strawberry ice cream<br>⚫ Chocolate ice cream<br>⚫ Fruit & Nut ice cream<br>⚫ Strawberry and Grapes<br><br>Total Price = LKR.850.00"
    );
    // -----------------Strawberry Mousse-------------------
  } else if (input.toLowerCase().includes("strawberry mousse")) {
    return (
      "<img src='desserts/st_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Strawberry Mousse Dessert.<br><br>Ingredients👉<br>⚫ Strawberry cream<br>⚫ Vanila cream<br>⚫ Fruit & Nut<br>⚫ Strawberry and Grapes<br><br>Total Price = LKR.550.00"
    );
    // -----------------Six Cups-------------------
  } else if (input.toLowerCase().includes("six cups")) {
    return (
      "<img src='desserts/six_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Six Cups Dessert.<br><br>Ingredients👉<br>⚫ Strawberry ice cream<br>⚫ Fruit & Nut ice cream<br>⚫ Caramel + Sweets<br><br>Total Price = LKR.750.00"
    );
  }
}
