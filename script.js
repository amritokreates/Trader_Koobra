// =========================================
// Telegram Landing Page Script
// =========================================

const joinBtn = document.getElementById("joinBtn");

if (joinBtn) {

    let isProcessing = false;

    joinBtn.addEventListener("click", function (e) {

        e.preventDefault();

        if (isProcessing) return;
        isProcessing = true;

        const telegramURL = this.href;

        // Meta Pixel Subscribe Event
        if (typeof fbq === "function") {
            fbq("track", "Subscribe");
        }

        // Open Telegram after event fires
        setTimeout(() => {
            window.open(telegramURL, "_blank", "noopener,noreferrer");
            isProcessing = false;
        }, 300);

    });

}


// Optional: Disable right click
// Uncomment if you want
/*
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});
*/


// Optional: Disable drag on images
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
});


// Smooth focus for accessibility
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


console.log("Telegram Landing Page Ready");