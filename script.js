function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector(".menu").classList.toggle("hidden");

    //let variablen definere hvis menuen er skjult indeholder den class hidden

    let erSkjult = document.querySelector(".menu").classList.contains("hidden");

    //if else sætning med betingelse for textcontent, som udskriver noget i html
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
