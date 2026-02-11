const messages = [
    "Are you sure bebe?",
    "Really sure??",
    "Are you sure na talaga?",
    "Bebe please...",
    "Just think about it!",
    "If you say no, I will be really sad bebe...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking na...",
    "Just kidding, say yes please my tortol! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
