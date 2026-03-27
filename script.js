window.onload = function() {
    // ऑडियो को प्ले करने की कोशिश
    const audio = document.getElementById('welcome-audio');
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Browser blocked autoplay. Music will play on next interaction.");
        });
    }

    // 4.5 सेकंड का इंतज़ार करें, फिर लॉगिन पेज पर जाएँ
    setTimeout(function() {
        window.location.href = "login.html";
    }, 4500);
};
