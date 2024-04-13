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
  }
}
