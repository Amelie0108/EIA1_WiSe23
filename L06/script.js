let playerName = prompt("Bitte deinen Namen angeben");

if (playerName) {
    let firstdecision = prompt("Hallo " + playerName + ", willst du den Wald (w) oder den Fluss (f) erkunden? Antwort mit w oder f");

    if (firstdecision === "w") {
        let forest = prompt("Im Wald triffst du auf ein Monster. Kämpfen (k) oder Fliehen (f)?");

        if (forest === "k") {
            alert("Mutig! Du besiegst das Monster und findest einen Schatz.");
        } else if (forest === "f") {
            alert("Kluge Entscheidung! Sicherheit geht vor.");
        } else {
            alert("Das war keine gültige Entscheidung. Das Spiel endet hier.");
        }

    } else if (firstdecision === "f") {
        let river = prompt("Am Fluss triffst du einen weisen Mann. Reden (r) oder Weitergehen (w)?");

        if (river === "r") {
            alert("Der weise Mann gibt dir einen wertvollen Rat für dein Leben.");
        } else if (river === "w") {
            alert("Du verpasst die Chance, aber genießt einen schönen Spaziergang.");
        } else {
            alert("Das war keine gültige Entscheidung. Das Spiel endet hier.");
        }

    } else {
        alert("Das war keine gültige Entscheidung. Das Spiel endet hier.");
    }
} else {
    alert("Kein Name eingegeben. Das Spiel endet hier.");
}