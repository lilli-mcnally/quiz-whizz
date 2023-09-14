// An event listener that makes the Rules modal visible / invisible
document.getElementById("rules-link").onclick = function seeRules() {
    let rulesModal = document.getElementById("rules-modal");
    let close = document.getElementById("close");

    // Makes the Rules modal visible
    rulesModal.style.display = "block";

    //Makes the Rules modal invisible
    close.onclick = function () {
        rulesModal.style.display = "none";
    };
};