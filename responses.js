// user name
let userName = "";
let nameState = false;

// delivery
let Adrs = "";
let adrState = false;

//Feedback
let feed = "";
let feedx = false;
const goodRates = ["6", "7", "8", "9", "10"];
const mediumRates = ["5"];
const badRates = ["0", "1", "2", "3", "4"];

// Unkown Message / Chat-Bot Training
let unknownMessage = {};
let newMessage = "";
let waiting = false;

//Change theme
let currentTheme = 1; // Keep track of the current theme

//emotion change
const emotionImg = document.getElementById("emotion-img");

// Define audio files
const audioFiles = {
  greeting: "asset/greeting.mp3",
};

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

// DATA GET FROM TEXT FILE 
// Fetch Foods from text file
let foods = [];

fetch('foods.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(text => {
    foods = text.split('\n').map(food => food.trim());
  })
  .catch(error => console.error('Error fetching foods:', error));


//----------------------------------------------------------------------//
//---------------------------*** MAIN RESPONSES ***-----------------------
function getBotResponse(input) {
// Direct responses
const directResponses = {
  "good morning": "Good Morning",
  "good afternoon":"Good Afternoon",
  "good evening": "Good evening",
  "good night": "Good Night",
  "how are you": "I am fine",
  };
  
// Check for direct responses
if (directResponses[input.toLowerCase()]) {
  playSound(audioFiles.greeting);
  return directResponses[input.toLowerCase()];
}
  

  //["hi", "hello"]
  const greetings = [
    "hi",
    "hello",
    "hey",
    "hey hey",
    "whatsup",
    "hii",
    "hello hi",
    "eva",
    "hi eva",
    "hello eva",
    "hello hi eva",
  ];
  const responses = [
    "Whatsup dear...😉",
    "Hello dear...😉",
    "Hello, Nice to meet you...😉",
  ];

  // if user input ok
  const OkInt = ["ok", "cool", "yes", "like", "yep", "good"];
  const OkResponses = ["Cool😎", "Ok dear", "Good dear👍"];

  //City Names
  const cityNames = [
    "colombo",
    "gampaha",
    "kalutara",
    "kandy",
    "matale",
    "nuwara eliya",
    "galle",
    "hambantota",
    "jaffna",
    "kilinochchi",
    "mannar",
    "mullaitivu",
    "vavuniya",
    "puttalam",
    "kurunegala",
    "anuradhapura",
    "polonnaruwa",
    "badulla",
    "monaragala",
    "ratnapura",
    "kegalle",
    "ampara",
    "batticaloa",
    "trincomalee",
  ];

  //---------------------------*********-----------------------
  //-------------------- Simple responses----------------------
  
  // Enter what is your name
  if (input.toLowerCase().includes("your name")) {
    userName = "";
    nameState = true;
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return "I am <b>EVA 🤖</b>, What is your name?";

    // Enter User's Name
  } else if (!userName && nameState) {
    // Start with "My name is..."
    if (input.toLowerCase().startsWith("my name is")) {
      userName = input.slice(10); // Set user's name
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/wow.png";
      return (
        "Hello <b>" +
        userName +
        "</b>, Welcome to the <b>Brew Cafe...</b>😊. How can I help you today?"
      );

      // Start with "My name..."
    } else if (input.toLowerCase().startsWith("my name")) {
      userName = input.slice(8); // Set user's name
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/wow.png";
      return (
        "Hello <b>" +
        userName +
        "</b>, Welcome to the <b>Brew Cafe...</b>😊. How can I help you today?"
      );

      // Start with "I am..."
    } else if (input.toLowerCase().startsWith("i am")) {
      userName = input.slice(5); // Set user's name
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/wow.png";
      return (
        "Hello <b>" +
        userName +
        "</b>, Welcome to the <b>Brew Cafe...</b>😊. How can I help you today?"
      );

      // Enter name..."
    } else {
      userName = input;
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/wow.png";
      return (
        "Hello <b>" +
        userName +
        "</b>, Welcome to the <b>Brew Cafe...</b>😊. How can I help you today?"
      );
    }

    // ----------------User Enter His name directly--------------
  } else if (input.toLowerCase().startsWith("my name is")) {
    userName = input.slice(10);
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/wow.png";
    return (
      "Hello " +
      userName +
      ", Welcome to the <b>Brew Cafe...</b>😊. How can I help you today?"
    );
  }


  //click heart button
  else if (input == "❤️") {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/love.png";
    return "<img src='asset/heart2.gif' alt='' width='50' height='50'>";
  
  //love you
  }else if (input.toLowerCase().includes("love you")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/love.png";
    return "<img src='asset/heart2.gif' alt='' width='50' height='50'>";
  
  //hate you
  }else if (input.toLowerCase().includes("hate you")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/angry.png";
    return "😡";

  // ---------***Upcoming Foods get from Text file***---------------------
  }else if (input.toLowerCase().includes("upcoming foods")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return `The Upcoming foods are <b>- ${foods.join(', ')}.`;
  
  
  //----------------------------***Change the Themes***----------------------- 
  }else if (input.toLowerCase().includes("change theme")) {
    currentTheme++;
    if (currentTheme > 3)
    currentTheme = 1;
    document.querySelector(".full-chat-block").style.background = `url(asset/bg${currentTheme}.jpg)`;
    playSound(audioFiles.greeting);
    return `Theme changed to Theme ${currentTheme} ✨`;


    //hello, hi
  } else if (greetings.includes(input.toLowerCase())) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/happy2.png";
    return responses[Math.floor(Math.random() * responses.length)];

    //Ok
  } else if (OkInt.includes(input.toLowerCase())) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/happy2.png";
    return OkResponses[Math.floor(Math.random() * responses.length)];

    //nice to meet you
  } else if (input.toLowerCase().includes("nice meet")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/happy2.png";
    return "Nice to meet you too 😊";

    //thanks
  } else if (input.toLowerCase().includes("thank")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return "Welcome " + userName + " 👋";


    //return OkResponses[Math.floor(Math.random() * responses.length)];

    // -----------------***FOODS***-------------------//
    // -----------------Main Menu-------------------//

    // ------------------Enter "Menu"--------------
  } else if (input.toLowerCase().includes("menu")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/mglogo.jpg' alt='' width='250' height='250'<br><br>Hello <b>" +
      userName +
      "</b>, Welcome to the <b>Brew Cafe.🍷</b><br>This is our menu. If you want know more details, Please mention food name.<br><br>1.Burgers<br><br>2.Coffees<br><br>3.Pizza<br><br>4.Desserts"
    );

    // ------------------Enter "Food"--------------
  } else if (input.toLowerCase().includes("food")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/mglogo.jpg' alt='' width='250' height='250'<br><br>Hello <b>" +
      userName +
      "</b>, Welcome to the <b>Brew Cafe.🍷</b><br>This is our menu. If you want know more details, Please mention food name.<br><br>1.Burgers<br><br>2.Coffees<br><br>3.Pizza<br><br>4.Desserts"
    );

    // ------------------Enter "Drink"--------------
  } else if (input.toLowerCase().includes("drink")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/mglogo.jpg' alt='' width='250' height='250'<br><br>Hello <b>" +
      userName +
      "</b>, Welcome to the <b>Brew Cafe.🍷</b><br>This is our menu. If you want know more details, Please mention food name.<br><br>1.Burgers<br><br>2.Coffees<br><br>3.Pizza<br><br>4.Desserts"
    );

    // -----------------Burgers-------------------//
    // -----------------******-------------------//
  } else if (input.toLowerCase().includes("burgers")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/b_banner.jpg' alt='' width='426' height='240'<br><br>Dear <b>" +
      userName +
      "</b>, We have various kinds of burgers🍔. If you want to know more details, please mention the each burger name.<br><br>1.Cheese Burger<br><br>2.Crispy Chicken Burger<br><br>3.Vegetable Burger<br><br>4.Hamburger<br><br>5.Sandwich Burger"
    );

    // -----------------cheese burgers-------------------
  } else if (input.toLowerCase().includes("cheese burger")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='burgers/cb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cheese Burger.<br><br>Ingredients👉<br>⚫ Cheese Layer 3x<br>⚫ Fish Patties 1x<br>⚫ Tomato Slices 2x<br>⚫ Onion<br>⚫ Lettuce Leaves<br><br>Total Price = LKR.950.00"
    );

    // -----------------crispy burgers-------------------
  } else if (input.toLowerCase().includes("crispy chicken")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='burgers/ccb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Crispy Chicken Burger.<br><br>Ingredients👉<br>⚫ Crispy Chicken Pieces 1x<br>⚫ Cheese Layer 1x<br>⚫ Chicken Patties 1x<br>⚫ Lettuce Leaves<br><br>Total Price = LKR.1150.00"
    );

    // -----------------vegetable burgers-------------------
  } else if (input.toLowerCase().includes("vegetable burger")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='burgers/vb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Vegetable Burger.<br><br>Ingredients👉<br>⚫ Cheese Layer 2x<br>⚫ Fish Patties 1x<br>⚫ Tomato Slices 3x<br>⚫ Onion<br>⚫ Lettuce Leaves<br>⚫ Cucumbers Slices 3x<br><br>Total Price = LKR.1250.00"
    );

    // -----------------hamburger-------------------
  } else if (input.toLowerCase().includes("hamburger")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='burgers/hb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Hamburger.<br><br>Ingredients👉<br>⚫ Beef Patties 2x<br>⚫ Tomato Slices 3x<br>⚫ Onion<br>⚫ Lettuce Leaves<br>⚫ Ketchup Layer<br>⚫ Mayonnaise Layer<br><br>Total Price = LKR.1050.00"
    );

    // -----------------sandwich burgers-------------------
  } else if (input.toLowerCase().includes("sandwich burger")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='burgers/sb.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Sandwich Burger.<br><br>Ingredients👉<br>⚫ Beef Patties 2x<br>⚫ Cheese Layer 1x<br>⚫ Lettuce Leaves<br>⚫ Mushroom<br>⚫ Onion<br>⚫ Ketchup Layer<br><br>Total Price = LKR.1100.00"
    );
  }

  //-------------------Coffee------------------------//
  //-------------------*****--------------------------//
  else if (input.toLowerCase().includes("coffees")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/c_banner.jpg' alt='' width='426' height='240'<br><br>Dear <b>" +
      userName +
      "</b>, We have various kinds of coffees☕. If you want to know more details, please mention the each coffee name.<br><br>1.Espresso<br><br>2.Cappuccino<br><br>3.Frappuccino<br><br>4.Iced Coffee<br><br>5.Black Coffee"
    );

    // -----------------espresso-------------------
  } else if (input.toLowerCase().includes("espresso")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='coffees/ex_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Espresso Coffee.<br><br>Ingredients👉<br>⚫ Finely ground coffee beans<br>⚫ hot water<br><br>Total Price = LKR.250.00"
    );

    // -----------------cappuccino-------------------
  } else if (input.toLowerCase().includes("cappuccino")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='coffees/c_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cappuccino Coffee.<br><br>Ingredients👉<br>⚫ Espresso shots<br>⚫ Steamed milk<br>⚫ Milk foam<br><br>Total Price = LKR.450.00"
    );

    // -----------------frappuccino-------------------
  } else if (input.toLowerCase().includes("frappuccino")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='coffees/f_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Frappuccino Coffee.<br><br>Ingredients👉<br>⚫ Espresso shots<br>⚫ Milk<br>⚫ Ice cubes<br>⚫ Chocolate + Vanila cream<br>⚫ Whipped cream<br>⚫ Caramel + Sweets<br><br>Total Price = LKR.850.00"
    );

    // -----------------black-------------------
  } else if (input.toLowerCase().includes("black coffee")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='coffees/b_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Black Coffee.<br><br>Ingredients👉<br>⚫ Brewing ground coffee beans<br>⚫ Hot water<br><br>Total Price = LKR.150.00"
    );

    // -----------------iced-------------------
  } else if (input.toLowerCase().includes("iced coffee")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='coffees/i_coffee.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Iced Coffee.<br><br>Ingredients👉<br>⚫ Chilled coffee<br>⚫ Chocolate milk<br>⚫ Ice cubes<br><br>Total Price = LKR.300.00"
    );

  } //-------------------Pizza------------------------//
  //---------------------*****--------------------------//
  else if (input.toLowerCase().includes("pizza")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/p_banner.jpg' alt='' width='426' height='240'<br><br>Dear <b>" +
      userName +
      "</b>, We have various kinds of pizzas🍕. If you want to know more details, please mention the each pizza name.<br><br>1.Cheese Lover<br><br>2.Sausage Delight<br><br>3.Double Chicken<br><br>4.Spicy Veggie<br><br>5.Hot & Spicy"
    );

    // -----------------cheese lover-------------------
  } else if (input.toLowerCase().includes("cheese lover")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='pizzas/c_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Cheese Lover pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Mozzarella Cheese layers 3x<br><br>Total Price = LKR.1650.00"
    );

    // -----------------sausage delight-------------------
  } else if (input.toLowerCase().includes("sausage delight")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='pizzas/s_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Sausage Delight pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Chicken sausages<br>⚫ Onions<br>⚫ Mozzarella Cheese layers 2x.<br><br>Total Price = LKR.1850.00"
    );

    // -----------------double chicken-------------------
  } else if (input.toLowerCase().includes("double chicken")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='pizzas/d_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Double Chicken pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Spicy chicken<br>⚫ Succulent chicken sausages<br>⚫ Crunchy onions and capsicum<br>⚫ Mozzarella Cheese layers 1x<br><br>Total Price = LKR.1930.00"
    );

    // -----------------spicy veggie-------------------
  } else if (input.toLowerCase().includes("spicy veggie")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='pizzas/sv_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Spicy Veggie pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Mushrooms, Tomatoes, Onions<br>⚫ Black olives and bell peppers<br>⚫ Mozzarella Cheese layers 2x.<br><br>Total Price = LKR.2300.00"
    );

    // -----------------hot & spicy-------------------
  } else if (input.toLowerCase().includes("hot & spicy")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='pizzas/h_pizza.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Hot & Spicy pizza.<br><br>Ingredients👉<br>⚫ Ketchup Layer<br>⚫ Spicy chunks of chicken<br>⚫ Capsicums and Onions<br>⚫ Mozzarella Cheese layers 2x.<br><br>Total Price = LKR.1950.00"
    );

  } //-------------------Desserts------------------------//
  //----------------------*****--------------------------//
  else if (input.toLowerCase().includes("dessert")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='asset/d_banner.jpg' alt='' width='426' height='240'<br><br>Dear <b>" +
      userName +
      "</b>, We have various kinds of desserts🍨. If you want to know more details, please mention the each desserts name.<br><br>1.Chocolate Lava<br><br>2.Choco Cup<br><br>3.Bliss Berry<br><br>4.Strawberry Mousse<br><br>5.Six Cups"
    );

    // -----------------chocolate lava-------------------
  } else if (input.toLowerCase().includes("chocolate lava")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='desserts/cl_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Chocolate Lava Dessert.<br><br>Ingredients👉<br>⚫ Chocolate.<br>⚫ Cocoa powder<br>⚫ Eggs<br>⚫ Butter<br><br>Total Price = LKR.450.00"
    );

    // -----------------Choco Berry-------------------
  } else if (input.toLowerCase().includes("choco cup")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='desserts/cc_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Choco Cup Dessert.<br><br>Ingredients👉<br>⚫ Chocolate cake<br>⚫ Chocolate cream<br>⚫ Whipped cream<br>⚫ Cherry<br><br>Total Price = LKR.350.00"
    );

    // -----------------Bliss Berry-------------------
  } else if (input.toLowerCase().includes("bliss berry")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='desserts/bl_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Bliss Berry Dessert.<br><br>Ingredients👉<br>⚫ Strawberry ice cream<br>⚫ Chocolate ice cream<br>⚫ Fruit & Nut ice cream<br>⚫ Strawberry and Grapes<br><br>Total Price = LKR.850.00"
    );

    // -----------------Strawberry Mousse-------------------
  } else if (input.toLowerCase().includes("strawberry mousse")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='desserts/st_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Strawberry Mousse Dessert.<br><br>Ingredients👉<br>⚫ Strawberry cream<br>⚫ Vanila cream<br>⚫ Fruit & Nut<br>⚫ Strawberry and Grapes<br><br>Total Price = LKR.550.00"
    );

    // -----------------Six Cups-------------------
  } else if (input.toLowerCase().includes("six cups")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/good.png";
    return (
      "<img src='desserts/six_des.jpg' alt='' width='300' height='300'<br><br>" +
      "Here, This is our Six Cups Dessert.<br><br>Ingredients👉<br>⚫ Strawberry ice cream<br>⚫ Fruit & Nut ice cream<br>⚫ Caramel + Sweets<br><br>Total Price = LKR.750.00"
    );

    //-----------------***END FOOD ITEMS***--------------------//


    //----------------- social medias
  } else if (input.toLowerCase().includes("social media")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/normal.png";
    return (
      'Here, These are our social medias📱. You can follow us and get updates<br><br><button class = "fa fa-facebook-square" style="color: blue; cursor: pointer; border: none; background: transparent; font-size: 30px; "></button>' +
      '<button class = "fa fa-instagram" style="color: purple; cursor: pointer; border: none; background: transparent; font-size: 30px; "></button>' +
      '<button class = "fa fa-whatsapp" style="color: green; cursor: pointer; border: none; background: transparent; font-size: 30px; "></button>'
    );
  }

  //--------------**********--------------
  //----------------Delivery--------------

  // ---- Can you delivery message------
  else if (input.toLowerCase().includes("deliver")) {
    Adrs = "";
    adrState = true;
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/normal.png";
    return "Please give me your address📍. I will check it.";

    // ---- Enter the address------
  } else if (!Adrs && adrState) {
    Adrs = input;
    if (cityNames.includes(Adrs.toLowerCase())) {
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/love.png";
      return (
        "Yes " + userName + "😊, We can delivery to " + "<b>" + Adrs + "</b>"
      );
    }

    // ----- Can't delivery
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/confuesd.png";
    return (
      "Sorry " +
      userName +
      "😢, We can not delivery to " +
      "<b>" +
      Adrs +
      "</b>, because that city is out of the range..."
    );
  }

  //---------------*********--------------
  //----------------Feedback--------------
  
  //----------------Enter "I Like it" --------------
  else if (input.toLowerCase().includes("like")) {
    feed = "";
    feedx = true;
    playSound(audioFiles.greeting);
    return (
      "Thanks " +
      userName +
      "😊, Can you please provide feedback on a scale of 0-10.<br>⭐⭐⭐⭐⭐"
    );

    //----------------Enter "Rate"--------------
  }else if (input.toLowerCase().includes("rate")) {
    feed = "";
    feedx = true;
    playSound(audioFiles.greeting);
    return (
      "Thanks " +
      userName +
      "😊, Can you please provide feedback on a scale of 0-10.<br>⭐⭐⭐⭐⭐"
    );
    
    //----- User Enter Number----
  } else if (!feed && feedx) {
    feed = input;

    //Good Rates Number (6-10)
    if (goodRates.includes(feed.toLowerCase())) {
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/happy.png";
      return (
        "Thanks " +
        userName + " for your feedback!😊. We appreciate your rating of <b>" + feed + " out of 10</b> 💕<br>"+ "⭐".repeat(feed)
      );
    }

    //Medium Rates Number (5)
    else if (mediumRates.includes(feed.toLowerCase())) {
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/confuesd.png";
      return (
        "Thanks " +
        userName + " for your feedback!😒. We appreciate your rating of <b>" + feed + " out of 10</b> 💕<br>"+ "⭐".repeat(feed)
      );
    }

    //Bad Rates Number (0-4)
    else if (badRates.includes(feed.toLowerCase())) {
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/sad.png";
      return (
        "Thanks " +
        userName + " for your feedback!😥. We appreciate your rating of <b>" + feed + " out of 10</b> 💕<br>"+ "⭐".repeat(feed)
      );

      //Invalid Ratings
    }else{
      playSound(audioFiles.greeting);
      emotionImg.src = "emotions/confuesd.png";
      return (
        "Sorry " +
        userName + "😢, That's not valid feedback " + "<b>" + feed + "</b> It is unable to understand."
      );
    } 
  }

  //----------------*****End FeedBack*****---------------


  //---------------- Good bye -----------------//
  else if (input.toLowerCase().includes("bye")) {
    playSound(audioFiles.greeting);
    emotionImg.src = "emotions/love.png";
    return "Goodbye " + userName + "👋, Have a nice day 💕";
  }


  //----------------- Chat Bot Training ----------------
  //------------------**********------------------------//
  else {
    if (waiting === true) {
      //with the "it is mean"
      if (input.toLowerCase().startsWith("it is mean")) {
        let answer = input.slice(11);
        unknownMessage[newMessage] = answer; //Store input
        playSound(audioFiles.greeting);
        emotionImg.src = "emotions/good.png";
        response = "I understood what <b>'" + newMessage + "'</b> means😊";
        waiting = false;

        //User do not know the answer
      } else if (input.toLowerCase() === "i don't know" || 
                input.toLowerCase() === "i dont know" ||
                input.toLowerCase() === "i do not know") {
        response = "It's ok dear.";
        waiting = false;

      } else {
        //without the "it is mean"(directly)
        unknownMessage[newMessage] = input; //Store input
        playSound(audioFiles.greeting);
        emotionImg.src = "emotions/good.png";
        response = "I understood what <b>'" + newMessage + "'</b> means😊";
        waiting = false;
      }

    } else {
      //If user say is not in unknownMessage
      if (!unknownMessage[input]) {
        newMessage = input;
        waiting = true;
        playSound(audioFiles.greeting);
        emotionImg.src = "emotions/confuesd.png";
        response = "I can't understand its meaning 😢. Please teach me.";
      } else {
        response = unknownMessage[input];
      }
    }
    playSound(audioFiles.greeting);
    return response;   
  }

}
