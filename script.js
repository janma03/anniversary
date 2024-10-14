
function openCard() {
    const envelope = document.getElementById("envelope");
    const card = document.getElementById("card");
    envelope.style.display = "none";  // Hide envelope
    card.style.display = "block";     // Show card

    // Play background music
    const audio = document.getElementById("bg-audio");
    audio.play();

    // Animation for the quote
    const quoteText = document.getElementById("quote-text");
    quoteText.textContent = "";
    const wishes = " Once again Happy Anniversary, my phuggi! I am so grateful for each moment with you, and I look forward to spending forever by your side I love you soo much jaana ";
    let i = 0;

    function typeWriter() {
        if (i < wishes.length) {
            quoteText.textContent += wishes.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}
