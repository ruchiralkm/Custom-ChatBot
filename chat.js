// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage =
    "<img src='asset/eva.gif' alt='' width='170' height='170'<br><br>Hello, I am <b>EVA.</b> How can I help you today?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  //Uncomment this if you want the bot to respond to this buttonSendText event
  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("❤️");
}

function menuBtn() {
  buttonSendText("menu");
}

//------------- else message button
// function handleMenuClick() {
//   buttonSendText("menu");
// }

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

// Function to handle speech recognition
function startSpeechRecognition() {
  const recognition = new webkitSpeechRecognition(); // Create speech recognition object
  recognition.lang = 'en-US'; // Set language to English (you can change it as per your requirement)
  
  // Start speech recognition
  recognition.start();
  
  // Event listener for when speech is recognized
  recognition.onresult = function(event) {
      const result = event.results[0][0].transcript; // Get the recognized text
      document.getElementById('textInput').value = result; // Display the text in the input field
  };
  
  // Event listener for errors
  recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
  };
}

// Add event listener to the button to start recording
document.getElementById('startRecord').addEventListener('click', startSpeechRecognition);
