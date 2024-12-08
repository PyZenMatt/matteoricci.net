document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Mostra il banner se il cookie non è stato accettato
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    // Nasconde il banner e salva la scelta
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});
