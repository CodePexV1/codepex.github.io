document.addEventListener("DOMContentLoaded", function() {
    const typedText = "Welcome to my website!";
    let index = 0;
    const typingEffectElement = document.getElementById("typing-effect");

    function typeText() {
        if (index < typedText.length) {
            typingEffectElement.innerHTML += typedText.charAt(index);
            index++;
            setTimeout(typeText, 100); 
        }
    }

    typeText(); 
});
