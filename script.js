const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
// Button for triggering the assistant
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    // Function to speak text
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

 // Function to handle various commands
    function handlecommands(command) {
        if (command.includes("open youtube")) {
            speak("opening youtube")
            window.open("https://www.youtube.com", "_blank");
        }
        else if (command.includes("open facebook")) {
            speak("openinng facebook")
            window.open("https://www.facebook.com/", "_blank");
        }
        else if (command.includes("open instagram")) {
            speak("opening instagram")
            window.open("https://www.instagram.com/", "_blank");
        }
        else if (command.includes("open google")) {
            speak("opening google")
            window.open("https://www.google.com/", "_blank");
        }
        else if (command.includes("open whatsapp")) {
            speak("opening whatsapp")
            window.open("https://web.whatsapp.com/", "_blank");
        }
        else {
            // Default: search on Google
            speak("searching on google...");
            setTimeout(() => {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
            }, 1000); // Added a slight delay to allow speaking to finish
        };
    };

    // Greet the user
    speak("how can i help you");
    // Start recognition after a short delay
    setTimeout(() => {
        recognition.start();
    }, 2000);
    
    // Event handler for speech recognition results
    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log("Command received:", command); // Debugging line
        handlecommands(command);
    };
});





