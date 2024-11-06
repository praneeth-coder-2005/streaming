// JavaScript for AI-Driven Voice Assistant

// Selecting DOM elements
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Speak function to respond to commands
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}

// Function to greet the user
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning!");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon!");
    } else {
        speak("Good Evening!");
    }
}

// Speech Recognition setup
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    processCommand(transcript.toLowerCase());
};

// Function to process voice command
function processCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello! How can I help you?");
    } else if (message.includes("who are you")) {
        speak("I am Shifra, your virtual assistant created to help you.");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        // Ensure 'calculator://' works in your environment, or replace with a web-based calculator
        window.open("https://www.desmos.com/scientific", "_blank");
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        // WhatsApp web fallback if WhatsApp app cannot be opened directly
        window.open("https://web.whatsapp.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "long", year: "numeric" });
        speak(`Today is ${date}`);
    } else {
        speak("This is what I found on the internet for your query.");
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}

// Bind the voice assistant to a button
btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});
